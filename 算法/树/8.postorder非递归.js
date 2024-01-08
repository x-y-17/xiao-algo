const bt = require('./bt');

const postorder = (root) => {
    if(!root) return;
    const stack = [root];
    const outputStack = [];
    while(stack.length > 0) {
        const node = stack.pop();
        outputStack.push(node)
        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    while(outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val);
    }
}

postorder(bt);

