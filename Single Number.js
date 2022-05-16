/**
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * 
 * 
 */


// input: array of numbers
// output: number that only occurs once

var singleNumber = function(nums) {
    // declare a const "obj" and set it to an empty object
    const obj = {};

    // iterate through the array
    nums.forEach((el) => {
        if (obj[el]) obj[el] += 1;
        else obj[el] = 1;
    })
    obj //?


    // iterate through object and return key, where value is 1
    for (let prop in obj) {
        if (obj[prop] === 1) return prop
    }
   
};

singleNumber([4,1,2,1,2]) //?