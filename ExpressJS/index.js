require('dotenv').config()

const app = require('express')();
const PORT = 8000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const secretKey = '161fc85f535615e1b630c59fe4f9d54cfe0dd824a174455f2aefd46fca9b69a1';
const multer = require('multer');

app.use(cors());
app.use(bodyParser.json({limit: '5000kb'}))


// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
// })



// Use multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Set the file size limit to 10 MB
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/webinar-list", (req, res) => {
    const sql = "SELECT webinar_id, namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id, views FROM webinar"
    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "webinars get list", res)
    })
})

//nampilin webinar sesuai webinar_id
app.get("/webinar/:webinar_id", (req, res)=> {
    const webinar_id = req.params.webinar_id;
    const sql = `SELECT namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id, views FROM webinar WHERE webinar_id = ${webinar_id} `
    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "webinar sesuai id webinar", res)
    })
})

app.get("/webinars-list-penyelenggara/:organisasi_id", (req, res) => {
    const organisasi_id = req.params.organisasi_id;

    const sql = `
        SELECT *
        FROM webinar
        WHERE organisasi_id = ?
        ORDER BY waktu DESC
    `;

    db.query(sql, [organisasi_id], (err, result) => {
        if (err) {
            response(500, "error", "Internal Server Error", res);
        } else {
            response(200, result, "Webinars retrieved successfully", res);
        }
    });
});

app.get("/webinars-list-user/:user_id", (req, res) => {
    const user_id = req.params.organisasi_id;

    const sql = `
        SELECT *
        FROM webinar
        WHERE user_id = ?
        ORDER BY waktu DESC
    `;

    db.query(sql, [user_id], (err, result) => {
        if (err) {
            response(500, "error", "Internal Server Error", res);
        } else {
            response(200, result, "Webinars retrieved successfully", res);
        }
    });
});

app.get("/penyelenggara", (req, res) => {
    const sql = "SELECT organisasi_id, namaOrganisasi, noTelp, email, website, password FROM organisasi"
    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "webinars get list", res)
    })
})

app.get("/penyelenggara/:organisasi_id", (req, res) => {
    const organisasi_id = req.params.organisasi_id;
    const sql = `SELECT organisasi_id, namaOrganisasi, noTelp, email, website, password FROM organisasi WHERE organisasi_id = ?`;

    db.query(sql, [organisasi_id], (err, result) => {
        if (err) throw err;
        
        if (result.length > 0) {
            response(200, result[0], "Penyelenggara details retrieved successfully", res);
        } else {
            response(404, null, "Penyelenggara not found", res);
        }
    });
});

// buat registrasi penyelenggara
app.post("/addOrganisasi", async ( req, res) => {
    const { namaOrganisasi, noTelp, email, website, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO organisasi (namaOrganisasi, noTelp, email, website, password) VALUES ('${namaOrganisasi}', '${noTelp}', '${email}', '${website}', '${hashedPassword}')`; 

    console.log(req.body)
    db.query(sql, (err, result) => {
        console.log(result);
        if (err) response(400, "invalid", "error", res);
        if (result?.affectedRows) {
            response(200, result.insertId, "Data Added Succesfully", res)
        }
    })
})

//login
app.post('/login', async (req, res) => {
    const {email, password} = req.body;

    db.query('SELECT * FROM organisasi WHERE email = ?', [email], async (err, rows) => {
        if (err) response(400, "invalid", "error", res);

         if (rows.length === 0){
            return response(401, "invalid email", "error", res);
        } 

        const user = rows[0];

        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return response(402, "invalid password", "error", res);
        }

        const token = jwt.sign({ organisasi_id: user.organisasi_id }, String(process.env.ACCESS_TOKEN_SECRET), {
            expiresIn: 86400 //24h expired
        });
        return res.status(200).json({ token , rows});
    })
})

// protected web
app.get('/protected', authenticationToken, (req, res) => {
    res.status(200).json({ message: 'You have access to this protected route' });
})

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, String(process.env.ACCESS_TOKEN_SECRET), (err, user) => {
        if (err) {
            console.error(err);
            return res.status(403).json({ error: 'Forbidden ' + token});
        }
        // return res.status(200).json({ message: 'bisa masuk'});
        req.user = user;
        next();
    })

}

// buat nampilin webinar penyelenggara sesuai id organisasinya
app.get("/webinar_penyelenggara/:organisasi_id", (req,res) => {
   const organisasi_id = req.params.organisasi_id;
   const sql = `SELECT webinar_id, namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id, views FROM webinar WHERE organisasi_id = ${organisasi_id}`
   db.query(sql, (err, result) => {
    if (err) throw err;
    response(200, result, "list", res);
   })
})

// Define the route for adding a webinar
app.post('/addWebinar/:organisasi_id', upload.single('img'), (req, res) => {
    console.log('Incoming request body:', req.body);
    const organisasi_id = req.params.organisasi_id;
    const formData = req.body;

    // Check if req.file is available before accessing its properties
    if (req.file && req.file.buffer) {
        formData.img = req.file.buffer;
    }

    const { namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host } = req.body;
    const sql = `INSERT INTO webinar (img, namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [formData.img, namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return response(400, "invalid", "error", res);
        }
        if (result?.affectedRows) {
            response(200, result.insertId, "Data Added Successfully", res)
        }
    });
});


// registrasi pengguna
app.post("/registerUser", (req, res) => {
    const { username, email, noTelp, password } = req.body;
    const sql = `INSERT INTO user (username, email, noTelp, password) VALUES ('${username}', '${email}', '${noTelp}', '${password}')`;
    // console.log(req.body)
    db.query(sql, (err, result) =>{
        // console.log(result)
        if (err) response(400, "invalid", "error", res);
        if (result?.affectedRows) {
            response(200, result.insertId, "Data Added Succesfully", res)
        }
    })
})

// daftar user ke webinar
app.post('/daftarWebinar/:user_id/:webinar_id', (req, res) => {
    const user_id = req.params.user_id;
    const webinar_id = req.params.webinar_id;
    const { tgl_pesan } = req.body;

    const sql = `INSERT INTO user_order (tgl_pesan, user_id, webinar_id) VALUES ('${tgl_pesan}', '${user_id}', '${webinar_id}')`;
    console.log(req.body);

    db.query(sql, (err, result) => {
        console.log(result);
        if (err) response(400, "invalid", "error", res);
        if (result?.affectedRows) {
            response(200, result.insertId, "Data Added Succesfully", res)
        }
    })
})

// tampilan webinar list menurut like dan user_id


// tampilan user list menurut webinar id atau tampilan order
app.get('/peserta/:webinar_id', (req, res) => {
    const webinar_id = req.params.webinar_id;

    const sql = `SELECT user_order.tgl_pesan, user.email, user.noTelp, webinar.namaWebinar, webinar.harga 
    FROM user_order
    JOIN webinar 
    ON user_order.webinar_id = webinar.webinar_id 
    JOIN user 
    ON user_order.user_id = user.user_id
    WHERE user_order.webinar_id = ${webinar_id}`

    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "user get list", res)
    })

}) 

// delete webinar

// tampilan user sesuai user id
app.get('/user/:user_id', (req, res)=> {
    const user_id = req.params.user_id;

    const sql = `SELECT username, email, noTelp FROM user WHERE user_id = ${user_id}`

    db.query(sql, (err, result)=> {
        if (err) throw err;
        response(200, result, "user get list", res)
    })
})