/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let index = 1; // 1 and not 0 because the first element of the array will always be unique so we start with the second one (1). index is where our next insertion of unique number will be.
    
    for (let i = 0; i < nums.length-1; i++) { //nums.length-1 because we stop comparing one stop short of the full length of the array. The last one will have nothing to be compared to.
        if (nums[i] !== nums[i+1]) {
            nums[index]=nums[i+1];
            index++;
        }
    }
    return index;    
};