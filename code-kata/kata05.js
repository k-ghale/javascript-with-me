
// 26 - Remove Duplicates from Sorted Array

var removeDuplicates = function(nums){
    let i = 1;

    for (let j = 0; j < array.length; j++) {
        if (nums[i] != nums[i-1]) {
            nums[j] = nums[i]
            i++
        } 
    }
    return i

}
