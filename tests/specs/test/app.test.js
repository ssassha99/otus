import { expect } from "chai"
//const { expect } = require('chai');
import { nameIsValid, fullTrim, getTotal } from "../../../src/app.js";

describe("Проверка функций файла app.js", function () {
  describe("Проверка функции nameIsValid", function () { 
    const preset_nameIsValid = [
      {
        description: "Неуспех, если на вход пришла не строка", 
        input: 123, 
        expected: false
      },
      {
        description: "Неуспех, если на вход пришла кириллица", 
        input: 'Саша', 
        expected: false
      },
      {
        description: "Неуспех, если на вход пришла заглавная буква", 
        input: 'Denis', 
        expected: false
      },
      {
        description: "Успех, если на вход пришло валидное имя", 
        input: 'sasha', 
        expected: true
      },
    ]       
    preset_nameIsValid.forEach(({description, input, expected }) => {
        it(description, function () {
        const result = nameIsValid(input)
        expect(result).to.equal(expected)   
      })
    })    
  }) 
  describe("Проверка функции fullTrim", function () { 
    const preset_fullTrim_Success = [
      {
        description: "Успех, на вход пришло 'Здравствуйте, какдела?' на выходе 'Здравствуйте,какдела?'", 
        input: 'Здравствуйте, как дела?', 
        expected: 'Здравствуйте,какдела?'
      },
      {
        description: "Успех, пришло ничего и вернулась пустая строка", 
        input: null, 
        expected: ''
      },
    ]    
    const preset_fullTrim_Error = [
      {
        description: "Ошибка, на вход пришли цифры", 
        input: 1111, 
        expected: TypeError
      },
      {
        description: "Ошибка, на вход пришли цифры", 
        input: 1111, 
        expected: TypeError
      }
    ]   
    preset_fullTrim_Success.forEach(({description, input, expected }) => {
      it(description, function () {
        const result = fullTrim(input)       
        expect(result).to.equal(expected) 
      })
    }) 
    preset_fullTrim_Error.forEach(({description, input, expected }) => {
      it(description, function () {
        expect(() => fullTrim(input)).to.throw(expected);
      })
    }) 
  })
  describe("Проверка функции getTotal", function () {     
    const preset_getTotal_Error = [
      {
        description: "Ошибка, 3 чека + скидка больше 100 процентов", 
        input:{
          items: [{
              price: 100,
              quantity: 2
            },
            {
              price: 50,
              quantity: 4
            },
            {
              price: 200,
              quantity: 1
            }
          ],
          discount: 101
        }, 
        expected: TypeError
      },
      {
        description: "Ошибка, 3 чека + скидка меньше 0 процентов", 
        input:{
          items: [{
              price: 100,
              quantity: 2
            },
            {
              price: 50,
              quantity: 4
            },
            {
              price: 200,
              quantity: 1
            }
          ],
          discount: -1
        }, 
        expected: TypeError
      }
    ]
    preset_getTotal_Error.forEach(({description, input, expected }) => {
      it(description, function() {
        expect(() => getTotal(input)).to.throw(expected);
      }) 
    }) 
    it("Успех, 3 чека", function () {
      const input = [{
              price: 100,
              quantity: 2
            },
            {
              price: 50,
              quantity: 4
            },
            {
              price: 200,
              quantity: 1
            }
          ]
      const expected = 600
      const result = getTotal(input)     
      expect(result).to.equal(expected)
    }) 
    it("Успех, 3 чека + скидка 10 процентов", function () {
      const input = [{
              price: 100,
              quantity: 2
            },
            {
              price: 50,
              quantity: 4
            },
            {
              price: 200,
              quantity: 1
            }
          ]
      const discount = 10
      const expected = 540
      const result = getTotal(input, discount)    
      expect(result).to.equal(expected)
    }) 
  })
})