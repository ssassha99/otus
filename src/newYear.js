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
console.log('Дед Мороз: ' + newYear('Дед Мороз'))
console.log('Снегурочка: ' + newYear('Снегурочка'))
console.log('Олень: ' + newYear('Олень'))