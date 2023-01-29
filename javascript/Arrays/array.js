// var guestList = ['aglea', 'anglea','anitha']
// // console.log(guestList[0]);
// let ar = guestList.includes('anitha');
//  console.log(ar); 


//------fizz buzz--var
// var outPut = [1, 2, 3, 4, 5, 5];
// outPut.push(2);
// outPut.pop();

// console.log(outPut);
// // console.log(output.pop());



var outPut = [];
var count = 1;
function fizzBuzz() {
     while(count <= 100) {
     
          if (count % 3 === 0 && count % 5 === 0) {
               outPut.push("fizzBuzz")
          }
          else if (count % 3 === 0) {
               outPut.push("fizz");
          }
          else if (count % 5 === 0) {
               outPut.push("buzz");
          }
          else {
               outPut.push(count);
          
          }
          count++;
     }
          console.log(outPut);    
}
fizzBuzz(); 
 

 //------------------------------
// function whosPaying(names) {
//   var people = names.length;
//   var random1 = Math.floor(Math.random() * people);
//   var randomPerson = names[random1];
//   return randomPerson + "is going to buy lunch today!";
// }
// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));
// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));


