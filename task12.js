/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/
function duplicateEncode(word){
  let arr = word.toLowerCase().split('');

let result = arr.map( (item, index) => [].concat( arr.slice(0, index), arr.slice(index+1) ).includes(item) ? ')' : '(' )

  return result.join('');
}