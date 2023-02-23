/**
 * @param {number} x
 * @return {number}
 */

// 2 to the power of 31 equals 2,147,483,648

var reverse = function(x) {
    let reversed = parseInt(x.toString().split("").reverse().join(""));
    
    if (x < 0) {
        reversed *= -1;
    }
    
    return (reversed > 2147483647 || reversed < -2147483648) ? 0 : reversed;
    
};