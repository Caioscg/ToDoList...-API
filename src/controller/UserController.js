class UsersControllers {
    async create(req, res) {
        const { name, password, email } = req.body

        return res.json({ email, password })
    }
}

module.exports = UsersControllers