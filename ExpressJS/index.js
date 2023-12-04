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