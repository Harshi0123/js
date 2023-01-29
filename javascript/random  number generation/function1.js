// //generates random numbers.
// var n = Math.random();
// n = n * 6;this // will generates a random number 16 decimal place number
// n=Math.floor(n) +1// if we write +1 it will  start from 1 to 6
// console.log(n);
// //floor == round that number down to the nearest number 
//--------------------

// prompt("hai")
// var loveScore = Math.random() * 100;
// if (loveScore > 70)
// {
//      console.log(loveScore + "you rea made for each other")
          
// }
// else {
// console.log("good firends ");
// }
     
// loveScore = Math.floor(loveScore) + 1; console.log("your love score is" + loveScore + "%");


//comparators and eqality 
// === ,!==,<= ,>=
//=== it will check both the value and datatype 
// AND OR and NOT 

//-------leap year---------
function isLeap(year) {
     if (year % 4 === 0) {
          if (year % 100 === 0) {
               if (year % 400 === 0) {
                    return "leap year"
               }
               else {
                    return "not a leap year"
               }
          }
     }
}
console.log(isLeap(2000));






//---------arrays--------
// collection of data items,
     // includes()=>if the elemnet there gives true or false.


