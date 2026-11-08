/* global describe test expect*/
const userAPI = require('../framework/services/apiBooks.js')
const userData = require('../framework/config/books.js')

describe('Тесты для https://bookstore.demoqa.com', () => {
  test('Создание пользователя c ошибкой, логин уже используется', async () => {    
    const response = await userAPI.createUser(userData.existingUser)
    expect(response.status).toBe(406)
    expect(response.data.message).toBe("User exists!")
  }, 10000);
  test('Создание пользователя c ошибкой, пароль не подходит', async () => { 
    const response = await userAPI.createUser(userData.wrongPassword)
    expect(response.status).toBe(400);
    expect(response.data.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."); 
  }, 10000);

  test('Создание пользователя успешно', async () => {    
    const response = await userAPI.createUser(userData.uniqueUserName)
    expect(response.status).toBe(201);
    expect(response.statusText).toBe("Created");
    expect(response.data.username).toBe(userData.uniqueUserName.userName);
  }, 10000);

  test('Генерация токена с ошибкой', async () => {    
    const response = await userAPI.generateToken(userData.wrongPasswordForExistingUser)
    expect(response.data.token).toBe(null)
    expect(response.data.status).toBe('Failed')
    expect(response.data.result).toBe('User authorization failed.');
  }, 10000);

  test('Генерация токена успешно', async () => {    
    const response = await userAPI.generateToken(userData.existingUser)
    expect(response.data.token).not.toBe(null)
    expect(response.data.status).toBe('Success')
    expect(response.data.result).toBe('User authorized successfully.');
  }, 10000);
});