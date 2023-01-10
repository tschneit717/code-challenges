/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
var isSameTree = function(tree1, tree2) {
    if (
        !tree1 && tree2  // if no tree1 but there is tree 2 return false
        || tree1 && !tree2   // if no tree 2 but there is tree 1 return false
        || tree1 && tree2 && tree1.val !== tree2.val) return false; // if there is a tree 1 and tree 2, but tree values are not the same, return false
    if (tree1 && tree2) return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right) // if there is a tree 1 and 2, recursively check their branches
    return true // if not and you've made it here, true
};