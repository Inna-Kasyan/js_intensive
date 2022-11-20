/* Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
*/

function aclean(arr){
 let map = new Map();
 for (let word of arr){
   let item = word.toLowerCase().split('').sort().join('');
   map.set(item, word);
 }

 return Array.from(map.values())
}

