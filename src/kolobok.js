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
console.log('дедушка: ' + kolobok('дедушка'))
console.log('заяц: ' + kolobok('заяц'))
console.log('лиса: ' + kolobok('лиса'))
console.log('бабушка: ' + kolobok('бабушка'))