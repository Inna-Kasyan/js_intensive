/* 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

function order(words){
    let arr = words.split('').filter( item => isFinite(item) && item > 0);
    
    console.log(arr);
    let result=[];
  
  
    
  for (let i=0; i<arr.length; i++){
   let x = (i+1).toString()
    
  result.push(words.split(' ')[arr.indexOf(x)]);
    
  }
     return result.join(' ')           
  }