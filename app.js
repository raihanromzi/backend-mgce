require('@google-cloud/debug-agent').start()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const recordRouter = require('./routes/record')

app.use(bodyParser.urlencoded({extended: true}))
app.use(recordRouter)

app.get("/", (req, res) => {
    console.log("Response success")
    res.send("Response Success!")
})

const PORT = process.env.PORT || 8000
const HOST = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server is up and listening on ${HOST}:${PORT}`);
});