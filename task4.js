/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
function XO(str) {
  let x = [];
  let o = [];
  let arr = str.toLowerCase().split('');
  for (item of arr) {
    if (item === 'o'){
      x.push(item)
    }
    else if( item==='x'){
      o.push(item)
    }
  }
  
  if (x.length === o.length) return true;
  else return false;
}