const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
require('dotenv').config()

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:  process.env.DB_DATABASE
})

const port = 3000
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/attractions', (req, res) => {
    db.query("SELECT * FROM name", (err, rows, fields) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed', details: err })
        }
        console.log(`connect`)
        res.json(rows)
    })
})

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err)
    } else {
        console.log('Connected to the database successfully!')
        connection.release()  
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    console.log(`http://localhost:${port}`)
})
