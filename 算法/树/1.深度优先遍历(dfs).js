// 1.访问根节点
// 2.对根节点的children挨个进行深度优先遍历
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

const dfs = (root) => {
    console.log(root.val);
    root.childern.forEach(element => {
        dfs(element)        
    });
}

dfs(tree);