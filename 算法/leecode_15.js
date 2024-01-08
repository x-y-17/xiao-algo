var threeSum = function(nums) {
    let res = [];
    nums = nums.sort((a,b) => a-b);
    for(let i = 0;i < nums.length;i++){
        if(nums[i] > 0) return res;
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while(right > left){
            if(nums[i] + nums[left] + nums[right] > 0){
                right--;
            }
            if(nums[i] + nums[left] + nums[right] < 0){
                left++
            }
            if(right > left&& nums[i] + nums[left] + nums[right] === 0){
                res.push([nums[i],nums[left],nums[right]]);
                while(nums[left] === nums[left+1]){
                    left++;
                    if(right < left) break;
                }
                while(nums[right] === nums[right-1]){
                    right--;
                    if(right < left) break;
                }
                left++;
                right--;
            }
        }
    }
    return res;
};

const a = [-2,0,1,1,2];
console.log(threeSum(a));

console.log(1);
