/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */



// Brute Force
var climbStairs = function(n) {

    return helper(0, n);
    
};

function helper(i, n, counter = 0, counterb = 0) {

    if (i > n) return 0;
    if (i === n) return 1;
    return helper(i + 1, n) + helper(i + 2, n);
}


climbStairs(4) //?


// var climbStairs = function(n) {
//     if (n === 1) return 1;
//     let dp = n + 1;
//     dp
    
// };
