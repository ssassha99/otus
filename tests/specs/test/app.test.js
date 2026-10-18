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
    const preset_fullTrim = [
      {
        description: "Успех, на вход пришло 'Здравствуйте, какдела?' на выходе 'Здравствуйте,какдела?'", 
        input: 'Здравствуйте, как дела?', 
        expected: 'Здравствуйте,какдела?'
      },
      {
        description: "Ошибка, на вход пришли цифры", 
        input: 1111, 
        expected: TypeError
      },
      {
        description: "Успех, пришло ничего и вернулась пустая строка", 
        input: null, 
        expected: ''
      },
    ]       
    preset_fullTrim.forEach(({description, input, expected }) => {
        it(description, function () {
          if (typeof input === 'string' || input === null || input === undefined){
            const result = fullTrim(input)       
            expect(result).to.equal(expected) 
          } else {
            expect(() => fullTrim(input)).to.throw(expected);
          } 
      })
    }) 
  })
  describe("Проверка функции getTotal", function () { 
    const preset_getTotal = [
      {
        description: "Успех, 3 чека", 
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
        }, 
        expected: 600
      },
      {
        description: "Успех, 3 чека + скидка 10 процентов", 
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
          discount: 10
        }, 
        expected: 540
      },
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
      },
    ]       
    preset_getTotal.forEach(({description, input, expected }) => {
        it(description, function () {
          if (input.discount >= 100 || input.discount < 0){
            expect(() => getTotal(input)).to.throw(expected);
          } else {
            const result = input === undefined ? getTotal(input.items) : getTotal(input.items, input.discount)       
            expect(result).to.equal(expected)
          } 
      })
    }) 
  })
})