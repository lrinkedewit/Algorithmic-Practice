/**
 * 
 * You are given a string s and an array of strings words of the same length. 
 * Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, 
 * and without any intervening characters.
 * You can return the answer in any order.
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"] // foobar, barfoo
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

 */

let string = "barfoothefoobarman"
const arr = ["foo","bar"]

var findSubstring = function(s, words) {

    // output array
    // first make an object that stores all the concatenated versions of words
    // second make an object that stores the first letters of each word
    const output = [];
    const concat = { 
        0 : 'foobar',
        1 : 'barfoo'
    };
    const firstLetters = {
        0 : 'f',
        1 : 'b'
    };
    let slidingWindow; //? 


    const concatTest = {}
    const firsLettersTest = {}


    // iterate through the words array and use backtracking to add all variations to our "concat" object
    // const generate = (comb = '') => {
    //     if (comb.length === )
    // }

    // create a sliding window of the concatenated words length
    slidingWindow = concat[0].length
    //? 


    // sliding window function
    const sliFunc = (index, string) => { 
        let save = '';
        index //?
        index + slidingWindow //?
        // we iterate through the string for the duration of the concatenated words.length and store that in a temporary variable called string
        for (let i = index; i < index + slidingWindow; i += 1) {
            save += string[i]
        }
        save //?
        return save;
    }


    // iterate through the string
    for (let i = 0; i < s.length; i += 1) {
        // iterate through our firstLetters object
        for (let prop in firstLetters) {
            // conditional where if we run into either the first letter of our words array, we invoke our sliding window 
            if (firstLetters[prop] === s[i]) {
                let result = sliFunc(i, s)
                // iterating through concat object again
                for (let prop in concat) {
                    if (concat[prop] === result) output.push(i)
                }
            }      
        }


        
        // we store the result of running this function in a variable
        // now we iterate through our object if the string exists
            // if it does, we push the index that we're currently at to our output array
    }



    // return output
    return output;

};

findSubstring(string, arr) //?