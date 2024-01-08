var maxSubArray = function(nums) {
    let sum = nums[0];
    let res = nums[0];
    for(let i =1;i < nums.length;i++){
        if(sum < 0){
            sum = nums[i]
        }else{
            sum = sum + nums[i];
            if(res < sum){
                res = sum;
            }
        }
    }
    return res;
};

maxSubArray([-2,1]);