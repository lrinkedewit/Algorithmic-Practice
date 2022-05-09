/**
 * Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
 * You may return the answer in any order.

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

 */

var combine = function(n, k) {
    // declare "output" set to an empty array
    const output = [];
    // declare a counter set to n
    let counter = 1;
    // declare an array "numbers" to store all numbers from 1 to n
    const numbers = [];
    // declare a function "numberSet" to be called recursively until counter === n
    function numberSet() {
        // base case, counter === n
        if (counter > n) return;
        // push counter to "numbers" 
        numbers.push(counter);
        // counter += 1
        counter += 1;
        // recursively call "numberSet"
        numberSet();
    }
    
    // call "numberSet"
    numberSet() 
    numbers //? 

    // declare a function "generate" to be called recursively that has a default parameter set to an empty array (tail call)
    function generate (combo = [], first = 0) {
        // base case
        if (combo.length === k) {
            // push the copied array to our output
            return output.push([...combo]);

        }
        for (let i = first; i < numbers.length; i += 1) {
            combo.push(numbers[i])
            generate(combo, i + 1)
            combo.pop()
        }
    }

    // call "generate"
    generate();

    // return "output"
    return output;

};

combine(4, 2) //?