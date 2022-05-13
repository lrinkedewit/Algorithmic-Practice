/**
 * Given an array nums of n integers where nums[i] is in the range [1, n], 
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 * 
 * 
 Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

 * 
 */

var findDisappearedNumbers = function(nums) {
    
    // declare a variable output and set it to an empty array
    const output = [];
    // declare a variable and set it to a Set object taking in nums as an array
    const set = new Set(nums); //?
    

    // declare a function to be called recursively
    const recurse = (counter = 1) => {
        // base case = counter === nums.length
        if (counter > nums.length) return;
        counter //? 
        // if counter does not exist in set, push it to output array
        if (!set.has(counter)) output.push(counter)
        recurse(counter += 1)
    };

    // call function
    recurse();

    // return output
    return output; //?

};

findDisappearedNumbers([4,3,2,7,8,2,3,1])
findDisappearedNumbers([1,1]) //?
