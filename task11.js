/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:


*/
function likes(names) {

      
  if (names.length === 0) return 'no one likes this';
  if (names.length === 1) return names.join('') + ' likes this';
   if (names.length <= 3) return names.slice(0, names.length-1).join(', ') + " and " + names.pop() + ' like this';
   if (names.length > 3) return names.slice(0,2).join(', ') +  ' and ' + (names.length - 2) + ' others like this';
  }