
// #35 - Search Insert Position

var searchInsert = function(nums, target){
    
    let left = 0;
    let right = nums.length;

    while (left<right) {
       let mid = Math.floor((left+right)/2)

        if(nums[mid] === target){
            return mid
        }
        else if(target > nums[mid]){
            left = mid + 1 
        }
        else{
            right = mid - 1
        }
    }

    return left

}


let nums = [1,3,5,6]
let target = 5 


console.log(searchInsert(nums,target))



