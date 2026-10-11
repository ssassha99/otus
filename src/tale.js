function kolobok(hero) {
  switch (hero) {
    case 'дедушка':
      return 'Я от дедушки ушёл';
    case 'заяц':
      return 'Я от зайца ушёл';
    case 'лиса':
      return 'Меня съели';
    default:
      return 'А меня нет';
  }
}

function newYear(hero) {
  switch (hero) {
    case 'Дед Мороз':
      return `${hero}! ${hero}! ${hero}!`;
    case 'Снегурочка':
      return `${hero}! ${hero}! ${hero}!`;
    default:
      return 'Введите "Дед Мороз" или "Снегурочка"';
  }
}

console.log('kolobok:')
console.log()

console.log('дедушка: ' + kolobok('дедушка'))
console.log('заяц: ' + kolobok('заяц'))
console.log('лиса: ' + kolobok('лиса'))
console.log('бабушка: ' + kolobok('бабушка'))

console.log()
console.log('newYear:')
console.log()


console.log('Дед Мороз: ' + newYear('Дед Мороз'))
console.log('Снегурочка: ' + newYear('Снегурочка'))
console.log('Олень: ' + newYear('Олень'))