/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
	let count = 0;
   if (num < 10) return count;
 
   do {
	  num = num.toString().split('').reduce ( (result, current) => result * current, 1); 
	 count += 1;
	 }  while (num > 9)
 return count;  
 
 }