function highAndLow(numbers){
    let arr = numbers.split(" ");
     let x = Math.min(...arr);
     let y = Math.max(...arr);
     let str =+ y + " " + x
     return str;
   }