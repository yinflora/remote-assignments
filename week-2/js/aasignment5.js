//Assignment 5: Algorithm (Advanced Optional)
/* Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice. */

function twoSum(nums, target) {
    // your code here
    for (let x = 0; x <= nums.length; x++) {
        let secondNum = target - nums[x];
        for (let y = x + 1; y <= nums.length; y++) {
            if (nums[y] === secondNum) {
                return [x, y];
            }
        }
    }
}
/*
    For example:
        twoSum([2, 7, 11, 15], 9);
    Should returns:
        [0, 1]
    Because:
        nums[0] + nums[1] is 9
*/
