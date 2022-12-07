/* 
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2
*/
function isPythagoreanTriple(integers) {
  let arr = integers.sort( (a,b) => a-b);
    if (Math.pow(arr[0],2)+ Math.pow(arr[1],2) === Math.pow(arr[2],2)) return true;
    else return false
  }