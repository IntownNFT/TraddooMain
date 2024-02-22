const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const env = require('dotenv')
const Mailjet = require('node-mailjet');

env.config()
const jsonParser = bodyParser.json();
const app = express()
app.use(cors())


app.get('/', (req, res) => {
    res.json("ok")
})
app.post('/subscribe', jsonParser, (req, res) => {
    const { email } = req.body;
    let mailjet;
    try {
        mailjet = Mailjet.apiConnect(
            process.env.API_KEY,
            process.env.SECRET_KEY,
        );
    } catch (err) {
        res.status(401).json("Failed to authorize Mailjet.")
    }
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

app.listen(3000)