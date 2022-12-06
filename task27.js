/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

function countSheeps(arrayOfSheep) {
   let result = 0
   for (let item of arrayOfSheep) {
     if (item === true){
       result += 1
     }
   }
   return result
 }