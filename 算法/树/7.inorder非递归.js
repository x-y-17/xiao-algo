const bt = require('./bt');

const inorder = (root) => {
    if(!root) return;
    const stack = [];
    let p = root;
    while(stack.length > 0 || p){
        while(p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right
    }
}

inorder(bt);


// 4
// 2
// 5
// 1
// 6
// 3
// 7