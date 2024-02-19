const { verify } = require("jsonwebtoken")
const AppError = require("../utils/AppError")
const authConfig = require("../configs/auth")

function ensureAuth(req, res, next) {
    const authHeader = req.headers.authorization // local do token do user

    if(!authHeader) {
        throw new AppError("JWT Token não informado", 401)
    }
}

module.exports = ensureAuth