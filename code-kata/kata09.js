
// #88 - Merge Sorted Array
var merge = function(nums1, m, nums2, n){
    let length = m+n
    for (let i = 0; i < length; i++) {
       if (nums1[i] == nums2[i]) {
            nums1.shift(nums2[i]) 
       }
        else if(nums1[i] !== nums2[i]){
            if (nums2[i] > nums1[i]) {
                nums1.shift(nums2[i]) 
            }
            else{
                nums1.unshift(nums2[i])
            }
        }
    }

    return nums1

}
