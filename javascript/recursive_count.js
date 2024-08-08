// recursive method:
function recursiveCount(num = 0) {
  if (num >= 10){
    return;
  }
  console.log(num);
  recursiveCount(++num);
  console.log(num);
}
// while loop method:
// function recursiveCount(num = 0) {
//   let count = 0;
//   while (count < 10){
//     console.log(count);
//     ++count;
//   }
// }

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

// THIS IS ALSO A VALID OPTION INSTEAD OF THE ABOVE
// recursiveCount(++num);
//  pre-increment: increments 'num' before the current expression is evaluated

// THIS WILL CAUSE A STACK OVERFLOW. WHY?
  // recursiveCount(num++);
  // Post-increment: This increments 'num' after the current expression is evaluated
  //  the value of 'num' before it is incremented is passed tot he next recursive call

// IF YOU LOG NUM BELOW, THE NUMBERS PRINT BACKWARDS FROM 9 TO 0. WHY?
// console.log(num);
//  the logging occurs after the recursice call, so it only happens as the recuresion unwinds, 


