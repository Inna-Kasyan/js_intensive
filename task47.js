/* 
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
  if (x.length <=1) return true;
  if (x.toLowerCase().slice(0, Math.floor(x.length/2))=== x.toLowerCase().slice(Math.round(x.length/2), x.length).split('').reverse().join('')) return true;
    else return false;
    }