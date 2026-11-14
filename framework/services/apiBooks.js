// services/apiClient.js
const axios = require('axios')
const URL = require('../config/books.js')

// Создаем инстанс, чтобы не писать validateStatus: null в каждом запросе
const apiClient = axios.create({
    validateStatus: null,
    timeout: 10000
})

class UserAPI {
    // Авторизация
    async authorize(user) {
        return apiClient.post(`${URL.BASE_URL}${URL.ENDPOINTS.AUTHORIZED}`, user)
    }
    // Создание пользователя
    async createUser(user) {
        return apiClient.post(`${URL.BASE_URL}${URL.ENDPOINTS.USER}`, user)
    }
    // Генерация токена
    async generateToken(user) {
        return apiClient.post(`${URL.BASE_URL}${URL.ENDPOINTS.GENERATE_TOKEN}`, user)
    }
    // Удаление пользователя
    async deleteUser(userId, token) {
        const config = token
            ? {
                  headers: { Authorization: `Bearer ${token}` }
              }
            : {}
        return apiClient.delete(`${URL.BASE_URL}${URL.ENDPOINTS.USER}/${userId}`, config)
    }
    // Получение информации о пользователе
    async getUser(userId, token) {
        const config = token
            ? {
                  headers: { Authorization: `Bearer ${token}` }
              }
            : {}
        return apiClient.get(`${URL.BASE_URL}${URL.ENDPOINTS.USER}/${userId}`, config)
    }
}

module.exports = new UserAPI()
