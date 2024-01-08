var wiggleMaxLength = function(nums) {
    if(nums.length === 1 || (nums.length === 2 && nums[0] === nums[1])) return 1;
    let res = 1;
    for(let i = 1;i < nums.length - 1;i++){
        if((nums[i] - nums[i-1] >=0 && nums[i+1] -nums[i] < 0) || (nums[i] - nums[i-1] <=0 && nums[i+1] -nums[i] > 0)){
            res++;
        }
    }  
    return res;
};

wiggleMaxLength([1,7,4,9,2,5]);