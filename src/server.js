import dotenv from "dotenv"

dotenv.config({})

import express from "express"
import { google } from "googleapis"

const calendar = google.calendar({
    version: "v3",
    auth: process.env.API_KEY
})

const app = express()
app.use(express.json())

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

const scopes = [
    'https://www.googleapis.com/auth/calendar'
]

app.get("/google", (req, res) => {

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes
    })

    res.redirect(url)
})

app.get("/google/redirect", async (req, res) => {
    const code = req.query.code

    const { tokens } = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)

    res.send("It's working!")
})

app.get("/schedule_events", (req, res) => {
    oauth2Client.get
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))