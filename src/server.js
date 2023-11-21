const express = require("express")
const { google } = require("googleapis")

const app = express()
app.use(express.json())

const auth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))