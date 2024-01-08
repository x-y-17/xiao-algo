// 左 右 根
const bt = require('./bt');

const postorder = (root) => {
    if (!root) {
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

postorder(bt);