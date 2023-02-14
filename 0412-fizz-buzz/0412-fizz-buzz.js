/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function(n) {
    let result = [];
    // index from 1 to 15
   for (let i=1; i<=n; i++)  {
       if (i%3===0 && i%5===0) {
           result.push("FizzBuzz");
       } else if (i%5===0) {
           result.push("Buzz");
       } else if (i%3===0) {
           result.push("Fizz");
       } else {
           result.push(i.toString());
       }
   }
   return result;
};