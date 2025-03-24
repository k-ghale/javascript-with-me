
// 26 - Remove Duplicates from Sorted Array

var removeDuplicates = function(nums){
    let k = 1;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== nums[k-1]) {
            nums[i] = nums[k] 
       } 
    }

    return k
}

let nums = [1,1,2,2,2,3,4,4,4]

console.log(removeDuplicates(nums))
