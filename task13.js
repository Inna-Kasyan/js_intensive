/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

function alphabetPosition(text) {
  return text.toLowerCase()
    		.split("")
  			.map((item) => item.charCodeAt(0) - 96)
  			.filter((item) => item > 0 && item < 27)
  			.join(" ");
}