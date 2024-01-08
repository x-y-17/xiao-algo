// 112. 路径总和

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const bt = require("./bt");
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function(root, targetSum) {
//     if(!root) return false;
//     let res = false;
//     let dfs = (root,val) => {
//         if(!root.left && !root.right) {
//             if(val === targetSum){
//                 res = true;
//             }
//         }
//         if(root.left) dfs(root.left,val + root.left.val)
//         if(root.right) dfs(root.right,val + root.right.val)
//     }
//     dfs(root,root.val);
//     return res;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	const traversal = (node, cnt) => {
		// 遇到叶子节点，并且计数为0
		if (cnt === 0 && !node.left && !node.right) return true;
		// 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
		if (!node.left && !node.right) return false;

		//  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
		if (node.left){
            let temp = cnt - node.left.val
            if(traversal(node.left, temp)){
                return true;
            }
        }
		//  右（空节点不遍历）
		if (node.right) {
            let s = cnt - node.right.val
            if(traversal(node.right, s)){
                return true;
            }
        }
		return false;
	};
	if (!root) return false;
	return traversal(root, targetSum - root.val);
};

console.log(hasPathSum(bt, 11));
