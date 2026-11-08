/* global describe test expect*/
const userAPI = require('../framework/services/apiBooks.js')
const userData = require('../framework/config/books.js')

describe('Тесты для https://bookstore.demoqa.com', () => {
  test('Успешная авторизация пользователя', async () => {    
    const response = await userAPI.authorize(userData.existingUser)
    expect(response.status).toBe(200)
    expect(response.data).toBe(true)
  }, 10000)
  
  test('Неуспешная авторизация с плохим запросом', async () => {    
    const response = await userAPI.authorize(userData.badUser)
    expect(response.status).toBe(400)
    expect(response.data.message).toBe('UserName and Password required.')
  }, 10000)
  test('Успешное удаление пользователя', async () => {    
      const userID = (await userAPI.createUser(userData.uniqueUserName)).data.userID
      const token = (await userAPI.generateToken(userData.uniqueUserName)).data.token
      const response = await userAPI.deleteUser(userID, token)
      expect(response.status).toBe(204)
      expect(response.data).toBe('')
    }, 10000);
  test('Неуспешное удаление пользователя', async () => {    
      const userID = (await userAPI.createUser(userData.uniqueUserName)).data.userID
      const response = await userAPI.deleteUser(userID) 
      expect(response.status).toBe(401)
      expect(response.data.message).toBe('User not authorized!')
    }, 10000);
  test('Успешное получение информации о пользователе', async () => {    
      const userID = (await userAPI.createUser(userData.uniqueUserNameForGetingInformation_1)).data.userID
      const token = (await userAPI.generateToken(userData.uniqueUserNameForGetingInformation_1)).data.token
      const response = await userAPI.getUser(userID, token)
      expect(response.status).toBe(200)
      expect(response.data.userId).toBe(userID)
      expect(response.data.username).toBe(userData.uniqueUserNameForGetingInformation_1.userName)
    }, 10000);
  test('Неуспешное получение информации о пользователе', async () => {
      const userID = (await userAPI.createUser(userData.uniqueUserNameForGetingInformation_2)).data.userID    
      const response = await userAPI.getUser(userID)
      expect(response.status).toBe(401)
      expect(response.data.message).toBe('User not authorized!')
    }, 10000);
});