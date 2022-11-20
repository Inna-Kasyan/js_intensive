/* Simple, given a string of words, return the length of the shortest word(s).


*/
function findShort(s){
    let result = [];
    let arr = s.split(' ');
    for (let word of arr){
      result.push(word.length)
    };
    return Math.min(...result)
  }