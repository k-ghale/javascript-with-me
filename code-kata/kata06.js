
// 27 - Remove Element 

var removeElement = function(nums, val){
    let k = 0

    for (let i = nums.length; i >= 0; i--) {
       if (val === nums[i]) {
            nums[i] = val
           k++
       } 
    }

}
