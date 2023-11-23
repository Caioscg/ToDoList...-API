import dotenv from "dotenv"

dotenv.config({})

import express from "express"
import { google } from "googleapis"

const app = express()
app.use(express.json())

const auth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

const scopes = [
    'https://www.googleapis.com/auth/calendar'
]

app.get("/google", (req, res) => {

    const url = auth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes
    })

    res.redirect(url)
})

app.get("/google/redirect", (req, res) => {
    const token = req.query.code

    res.send("It's working!")
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))