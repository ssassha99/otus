const userAPI = require('./apiBooks.js')

class usersController {
    constructor(name, password) {
        this.name = name + '__' + Date.now()
        this.password = password || 'P@ssw0rd123'
        this.userId = null
        this.token = null
    }
    async create() {
        const response = await userAPI.createUser({
            userName: this.name,
            password: this.password
        })
        this.userId = response.data.userID
        return this
    }
    async getToken() {
        const response = await userAPI.generateToken({
            userName: this.name,
            password: this.password
        })
        this.token = response.data.token
        return this
    }
    async addBooks(isbn) {
        const response = await userAPI.addBook(this.userId, this.token, isbn)
        return response.data
    }
    async getInfo() {
        const response = await userAPI.getUser(this.userId, this.token)
        return response.data
    }
    async getBookInfo(isbn) {
        const response = await userAPI.getBookInfo(isbn)
        return response.data
    }
    async deleteBook(isbn) {
        const response = await userAPI.deleteBook(this.userId, this.token, isbn)
        return response.data
    }
    async changeBook(oldIsbn, newIsbn) {
        const response = await userAPI.changeBook(this.userId, this.token, oldIsbn, newIsbn)
        return response.data
    }
}

module.exports = usersController
