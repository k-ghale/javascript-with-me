

// #1929 - Concatenation of Array
var getConcatenation = function (nums) {

    let ans = new Array( 2 * nums.length )

    for (let i = 0; i < nums.length; i++) {
       ans[i] = nums[i] 
       ans[i+nums.length] = nums[i]
    }

    return ans
}
