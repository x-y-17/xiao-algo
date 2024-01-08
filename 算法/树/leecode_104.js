// 104. 二叉树的最大深度

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
 * @return {number}
 */
const bt = require("./bt");

var maxDepth = function (root) {
	let maxDepth = 0;
	const dfs = (root, l) => {
		if (!root) {
			return;
		}
		if (!root.left && !root.right) {
			maxDepth = Math.max(maxDepth, l);
		}
		dfs(root.left, l + 1);
		dfs(root.right, l + 1);
	};
	dfs(root, 1);
	return maxDepth;
};

maxDepth(bt);
