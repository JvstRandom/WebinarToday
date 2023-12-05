const app = require('express')();
const PORT = 8000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response')

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
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
app.post("/addOrganisasi", (req, res) => {
    const { namaOrganisasi, noTelp, email, website, password } = req.body
    const sql = `INSERT INTO organisasi (namaOrganisasi, noTelp, email, website, password) VALUES ('${namaOrganisasi}', '${noTelp}', '${email}', '${website}', '${password}')`; 

    console.log(req.body)
    db.query(sql, (err, result) => {
        console.log(result);
        if (err) response(400, "invalid", "error", res);
        if (result?.affectedRows) {
            response(200, result.insertId, "Data Added Succesfully", res)
        }
    })
})

// buat nampilin webinar penyelenggara sesuai id organisasinya
app.get("/webinar_penyelenggara/:organisasi_id", (req,res) => {
   const organisasi_id = req.params.organisasi_id;
   const sql = `SELECT webinar_id, namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id, views FROM webinar WHERE organisasi_id = ${organisasi_id}`
   db.query(sql, (err, result) => {
    if (err) throw err;
    response(200, result, "list", res);
   })
})

// buat nambah webinar sesuai dengan organisasi id
app.post("/addWebinar/:organisasi_id", (req, res) => {
    const organisasi_id = req.params.organisasi_id;
    const { namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host } = req.body;
    const sql = `INSERT INTO webinar (namaWebinar, Online, harga, sertif, deskripsi, lokasi, waktu, cp, host, organisasi_id) VALUES 
    ('${namaWebinar}', '${Online}', '${harga}', '${sertif}', '${deskripsi}', '${lokasi}', '${waktu}', '${cp}', '${host}', '${organisasi_id}')`;
    // console.log(req.body)
    db.query(sql, (err, result)=>{
        // console.log(result);
        if (err) response(400, "invalid", "error", res);
        if (result?.affectedRows) {
            response(200, result.insertId, "Data Added Succesfully", res)
        }
    })
})

// registrasi pengguna
app.post("/registerUser", (req, res) => {
    const { email, noTelp, password } = req.body;
    const sql = `INSERT INTO user (email, noTelp, password) VALUES ('${email}', '${noTelp}', '${password}')`;
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
