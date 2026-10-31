/**
 * Функция находит сумму всех числовых значений в объекте.
 *
 * @param {Object<string, number>} data - Объект, где ключи — строки (имена), 
 *                                         а значения — числа (баллы/оценки).
 * @returns {number} Сумма всех значений из переданного объекта.
 */

export function getScore(data){
    let summ = 0 
    for (const key in data){
        summ = summ + data[key]
    }
    return summ
}


