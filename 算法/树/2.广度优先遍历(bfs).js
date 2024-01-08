// 1.新建一个队列
// 2.把队头出队并访问
// 3.把队头的children挨个入队
// 4.重复第二步和第三步，直到队列为空
const tree = {
	val: "a",
	childern: [
		{
			val: "b",
			childern: [
				{
					val: "d",
					childern: [],
				},
				{
					val: "e",
					childern: [],
				},
			],
		},
		{
			val: "c",
			childern: [
				{
					val: "f",
					childern: [],
				},
				{
					val: "g",
					childern: [],
				},
			],
		},
	],
};

const bfs = (root) => {
    const queue = [root];
    while(queue.length > 0) {
        const node = queue.shift();
        console.log(node.val);
        node.childern.forEach(child => {
            queue.push(child);
        });
    }
}
bfs(tree);