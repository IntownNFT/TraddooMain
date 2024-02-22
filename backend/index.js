const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const env = require('dotenv')
const Mailjet = require('node-mailjet');

env.config()
const jsonParser = bodyParser.json();
const app = express()
app.use(cors())

function connectMailjet() {
    return Mailjet.apiConnect(
        process.env.API_KEY,
        process.env.SECRET_KEY,
    );
}

app.get('/', (req, res) => {
    res.json("ok")
})


app.post('/subscribe', jsonParser, (req, res) => {

    // extract body data
    const { email } = req.body;

    // connect mailjet
    let mailjet;
    try {
        mailjet = connectMailjet()
    } catch (err) {
        res.status(401).json("Failed to authorize Mailjet.")
    }

    // create contact in mailjet
    const request = mailjet
        .post("contact", { 'version': 'v3' })
        .request({
            "Email": email
        })
    request
        .then((result) => {
            // console.log(result.body)
            res.status(200).json("ok")
        })
        .catch((err) => {
            // console.log(err)
            res.status(500).json("Email already registered")
        })
})

app.post('/message', jsonParser, (req, res) => {

    // extract data
    const { email, name, phone, subject, message } = req.body;

    // connect mailjet
    let mailjet;
    try {
        mailjet = connectMailjet()
    } catch (err) {
        res.status(401).json("Failed to authorize Mailjet.")
    }

    // send message
    const request = mailjet
        .post("send", { 'version': 'v3' })
        .request({
            "FromEmail": email,
            "FromName": name,
            "Recipients": [
                {
                    "Email": "support@traddoo.com",
                    "Name": "Dylan Worrall"
                }
            ],
            "Subject": subject,
            "Text-part": `Message: ${message}\n\nSender Phone: ${phone}`,
        })
    request
        .then((result) => {
            console.log(result.body)
            res.status(200).json("Message sent successfully.")
        })
        .catch((err) => {
            // console.log(err.statusCode)
            res.status(err.statusCode).json(err.statusText)
        })
})

app.listen(3000)