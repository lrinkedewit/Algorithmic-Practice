/**
 *
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

@param {number[]} nums
@param {number} target
@return {number[][]}
*/


let nums = [1,0,-1,0,-2,2]
let target = 0

var fourSum = function(nums, target) {
    const output = [];

    let p1 = 0;
    let p2 = 1;
    let p3 = 2;
    let p4 = 3;

    // while loop for p3 & p4
    while (p4 < nums.length && p3 < p4 && p2 < p3 && p1 < p2) {

        const innerArr = []

        let  sum = nums[p1] + nums[p2] + nums[p3] + nums[p4];
        if (sum === target) {
            innerArr.push(nums[p1], nums[p2], nums[p3], nums[p4])
            output.push(innerArr) //?
        }
        // ensure that first p4 moves to the end of the array and then p3

        if (p4 < nums.length - 1) p4++
        else if (p3 < nums.length - 2) p3++;
        else if (p2 < nums.length - 3) p2++;
        else p1++;

    }
    

    // return output
    return output;


};


fourSum(nums, 0) //?


fourSum([2,1,2,1,2], 6) //?