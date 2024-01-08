// 3. 无重复字符的最长子串

// 1.用双指针维护一个滑动窗口，用来剪切子串
// 2.不断移动右指针，遇到重复字符串，就把左指针移动到重复字符的下一位
// 3.过程中，记录所有窗口的长度，并返回最大值

// 课程写法
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let res = 0;
    const map = new Map();
    for (let r = 0;r < s.length; r+=1){
        if(map.has(s[r]) && map.get(s[r]) > l){
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res,r-l+1);
        map.set(s[r],r);
    }
    return res;
};



// 自由发挥
// var lengthOfLongestSubstring = function(s) {
//     if(s.length === 1) {
//         return 1;
//     }
//     let maxLength = 0;
//     let arr = s.split('');
//     let rightP = arr[0];
//     let tmpStr = arr[0];
//     for(let i = 1;i < arr.length;i++){
//         rightP = arr[i];
//         if(!tmpStr.includes(rightP)){
//             tmpStr = tmpStr + rightP;
//         }else{
//             let index = tmpStr.indexOf(rightP);
//             maxLength = Math.max(maxLength,tmpStr.length);
//             tmpStr = tmpStr.slice(index+1) + rightP
//         }
//     }
//     return maxLength;
// };

console.log(lengthOfLongestSubstring("abbcdea"));