const axios = require("axios");
//import axios from 'axios';

const BASE_URL = 'https://bookstore.demoqa.com';
const CREATE_USER_URL = '/Account/v1/User'
const GENERATE_TOKEN_URL = '/Account/v1/GenerateToken';

const existingUser = { 
    userName: 'existingUser', 
    password: 'P@ssw0rd123' 
}
const wrongPassword = {
    userName: 'user_' + Date.now(),
    password: '111111'
}
const wrongPasswordForExistingUser = { 
    userName: 'existingUser', 
    password: 'Wrong_P@ssw0rd123' 
}
const uniqueUserName = {
    userName: 'user_' + Date.now(),
    password: 'P@ssw0rd123' + Date.now(),
}

describe('Тесты для https://bookstore.demoqa.com', () => {
  test('Создание пользователя c ошибкой, логин уже используется', async () => {    
    try{
        await axios.post(`${BASE_URL}${CREATE_USER_URL}`, existingUser)
    } catch (error){
        expect(error.response?.status).toBe(406);
        expect(error.response?.data.message).toBe("User exists!");
    }  
  }, 10000);
  test('Создание пользователя c ошибкой, пароль не подходит', async () => {    
    try{
        await axios.post(`${BASE_URL}${CREATE_USER_URL}`, wrongPassword)
    } catch (error){
        expect(error.response?.status).toBe(400);
        expect(error.response?.data.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.");
    }   
  }, 10000);

  test('Создание пользователя успешно', async () => {    
    const response = await axios.post(`${BASE_URL}${CREATE_USER_URL}`, uniqueUserName)
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.data.username).toBe(uniqueUserName.userName);
  }, 10000);

  test('Генерация токена с ошибкой', async () => {    
    const response = await axios.post(`${BASE_URL}${GENERATE_TOKEN_URL}`, wrongPasswordForExistingUser)
    expect(response.data.token).toBe(null)
    expect(response.data.status).toBe('Failed')
    expect(response.data.result).toBe('User authorization failed.');
  }, 10000);

  test('Генерация токена успешно', async () => {    
    const response = await axios.post(`${BASE_URL}${GENERATE_TOKEN_URL}`, existingUser)
    expect(response.data.token).not.toBe(null)
    expect(response.data.status).toBe('Success')
    expect(response.data.result).toBe('User authorized successfully.');
  }, 10000);
});