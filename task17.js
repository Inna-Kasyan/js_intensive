/* 
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/

function nbYear(p0, percent, aug, p) {
	let dif = (p-p0);
  
	let count = 0;
	let result = p0;
	while (result < p )  {
	  result = result + Math.floor(result*(percent/100) + aug);
  
	  count += 1;
	
	}
	 return count
  }