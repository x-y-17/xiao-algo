const bt = require('./bt');

// 不论是队列还是栈来实现，只要让左在右之前从出就可以了

const preorder = (root) => {
    if(!root) return;
    const stack = [root];
    while(stack.length > 0) {
        const node = stack.pop();
        console.log(node.val)
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
}


// const preorder = (root) => {
//     if(!root) return;
//     const stack = [root];
//     while(stack.length > 0) {
//         const node = stack.shift();
//         console.log(node.val);
//         if(node.right) stack.unshift(node.right);
//         if(node.left) stack.unshift(node.left);
//     }
// }
preorder(bt);