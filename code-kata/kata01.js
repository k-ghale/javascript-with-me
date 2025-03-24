

// #1 - Two Sum

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j < array.length; j++) {
            if(target = nums[i] + nums[j]){
                return [i,j]
            }
      } 
    }
}
