// 根 左 右
// 访问根节点
// 访问左子树，递归遍历
// 访问右子树，递归遍历
const bt = require('./bt');

const preorder = (root) => {
    if (!root) {
        return;
    }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

preorder(bt);