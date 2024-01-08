// 111. 二叉树的最小深度

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

var minDepth = function (root) {
	const res = 0;
    if (!root) return;
    const queue = [[root,1]];
    while(queue.length > 0) {
        const [node, l] = queue.shift();
        if(!node.left && !node.right) {
            res = Math.min(res,l)
        }
        console.log(node.val,l);
        if (node.left) {
            queue.push([node.left, l+1]);
        }
        if (node.right) {
            queue.push([node.right, l+1]);
        }
    }
    return res;
};

minDepth(bt);