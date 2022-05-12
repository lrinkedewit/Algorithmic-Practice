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

    function generate (combo = [], first = 1) {
        // base case
        if (combo.length === k) {
            // push the copied array to our output
            return output.push([...combo]);

        }
        for (let i = first; i <= n ; i += 1) {
            combo.push(i)
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