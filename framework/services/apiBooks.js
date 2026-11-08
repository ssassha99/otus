// services/apiClient.js
const axios = require('axios');

// Создаем инстанс, чтобы не писать validateStatus: null в каждом запросе
const apiClient = axios.create({
    validateStatus: null, 
    timeout: 10000
});

const BASE_URL = 'https://bookstore.demoqa.com'

const ENDPOINTS = {
    AUTHORIZED: '/Account/v1/Authorized',
    USER: '/Account/v1/User',
    GENERATE_TOKEN: '/Account/v1/GenerateToken'
};

class UserAPI {
    // Авторизация
    async authorize(user) {
        return apiClient.post(`${BASE_URL}${ENDPOINTS.AUTHORIZED}`, user);
    }
    // Создание пользователя
    async createUser(user) {
        return apiClient.post(`${BASE_URL}${ENDPOINTS.USER}`, user);
    }
    // Генерация токена
    async generateToken(user) {
        return apiClient.post(`${BASE_URL}${ENDPOINTS.GENERATE_TOKEN}`, user);
    }
    // Удаление пользователя
    async deleteUser(userId, token) {
        const config = token ? { 
            headers: { 'Authorization': `Bearer ${token}` } 
        } : {};
        return apiClient.delete(`${BASE_URL}${ENDPOINTS.USER}/${userId}`, config);
    }
    // Получение информации о пользователе
    async getUser(userId, token) {
        const config = token ? { 
            headers: { 'Authorization': `Bearer ${token}` } 
        } : {};
        return apiClient.get(`${BASE_URL}${ENDPOINTS.USER}/${userId}`, config);
    }
}

module.exports = new UserAPI();