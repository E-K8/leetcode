/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numString = x.toString();
    let reversed = numString.split("").reverse().join("");  
    
    return (numString === reversed);   
    
};                  