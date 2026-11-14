/* global describe test expect*/
const user = require('../framework/services/usersController.js')

describe('Тесты для https://bookstore.demoqa.com', () => {
    test('Успешное получение информации о пользователе', async () => {
        // const userID = (await userAPI.createUser(userData.uniqueUserNameForGetingInformation_1)).data.userID
        // const token = (await userAPI.generateToken(userData.uniqueUserNameForGetingInformation_1)).data.token
        // const response = await userAPI.getUser(userID, token)
        // expect(response.status).toBe(200)
        // expect(response.data.userId).toBe(userID)
        // expect(response.data.username).toBe(userData.uniqueUserNameForGetingInformation_1.userName)
        // const clientAxios = axios.create({ validateStatus: null, headers: { Authorization: `Bearer ${token}` } })
        // const response1 = await clientAxios.get(`${BASE_URL}${ENDPOINTS.CREATE_BOOK}`)
        // console.log(response1.data)  //85835bd0-ec47-4cf7-978f-b7874cfff4e8
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImV4aXN0aW5nVXNlcjIiLCJwYXNzd29yZCI6IlBAc3N3MHJkMTIzIiwiaWF0IjoxNzk0Njc1NDgxfQ.fu_YQP56TWRNLLU_CaFDniDbrCnsZzRvjpav9GSgTeU
        // expect(response1.status).toBe(200) //9781593277574, 9781593275846, 9781491950296
        // const response2 = await clientAxios.post(`${BASE_URL}${ENDPOINTS.CREATE_BOOK}`, {
        //     userId: userID,
        //     collectionOfIsbns: [
        //         {
        //             isbn: '9781593277574'
        //         }
        //     ]
        // })
        // console.log(response2.data)
        // expect(response2.status).toBe(201)
        const controller = new user('testUser')
        await controller.create()
        await controller.getToken()
        console.log(controller.name)
        console.log(controller.password)
        console.log(controller.userId)
        console.log(controller.token)
        //const response = await userAPI.addBook(controller.userId, controller.token, '9781593277574')
        console.log(await controller.getInfo())
        await controller.addBooks('9781593277574')
        console.log(await controller.getInfo())
        await controller.changeBook('9781593277574', '9781491950296')
        console.log(await controller.getInfo())
    }, 10000)
})
