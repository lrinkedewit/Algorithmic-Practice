/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (i.e., from left to right, then right to left for the next level and alternate between).
 * 
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

tree //?


var zigzagLevelOrder = function(root) {
    // in case the root does not have elements, return empty array

    // declare an output variable and initialize it with an empty array
    const output = [];
    // declare a height variable that keeps track of the height set to 1
    let height = 1;

    // declare a BFS function to be called recursively 
    const dFS = (root) => {
        // base case => if root.left === null || if root.right === null
        if (root === null) return
        root.val //?
        // add the root.val to the output variable
        output.push(root.val) //?
        // conditional that checks if height is odd, and then traverses the next nodes from Right to Left
        if (height % 2 === 1) {
            dFS(root.right)
            height -= 1
            dFS(root.left)
            height -= 1
        }
        // conditional that checks if height it even, and then traverses the next nodes from Left to Right
        if (height % 2 === 0) {
            dFS(root.left)
            height -= 1
            dFS(root.right)
            height -= 1
        }
        height += 1

    }

    // call dFS on root
    dFS(root)

    // return output variable
    return output;

};

zigzagLevelOrder(tree) //?





