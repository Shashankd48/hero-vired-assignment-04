const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
PORT = process.env.PORT
const conn = require('./conn')
app.use(express.json())
app.use(cors())

const tripRoutes = require('./routes/trip.routes')

app.use('/trip', tripRoutes) // http://localhost:3001/trip --> POST/GET/GET by ID

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get("/health", async (req, res) => {
    const mongoose = require("mongoose");

    if (mongoose.connection.readyState === 1) {
        return res.status(200).json({
            status: "UP",
            database: "CONNECTED",
        });
    }

    return res.status(503).json({
        status: "DOWN",
        database: "DISCONNECTED",
    });
});


app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})