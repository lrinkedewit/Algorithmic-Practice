/**
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 */

function BinaryTree(value) {
    this.val = (value === undefined ? 0 : value)
    this.left = null
    this.right = null
}

const tree = BinaryTree(2)
tree.right = 3
tree.right.left = null
tree.right.right = 4
tree.right.right.left = null
tree.right.right.right = 5
tree.right.right.right.left = null
tree.right.right.right.right = 6


var minDepth = function(root) {

}