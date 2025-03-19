

// #9 - Palindrome Number 

var isPalindrome = function(x) {
    let reverse = `${x}`.split("").reverse().join("");

    return x == reverse
} 
