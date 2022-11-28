/* 
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

*/
function getSum( a,b )
{
  if (a === b) return a;
  let arr = [];
  if (a<b){
  for (let i = a; i <=b; i++){
    arr.push(i)
  }
    }
  if (a > b){
      for (let i = b; i <=a; i++){
    arr.push(i)
  }
  }
  return arr.reduce( (sum, current) => sum + current, 0)
}