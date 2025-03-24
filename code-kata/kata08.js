
// #35 - Plus One

var plusOne = function (digit) {
    for (let i = digit.length - 1; i >= 0; i--) {
        if (digit[i] + 1 !== 10) {
            digit[i] += 1
            return digit
        } 
        digit[i] = 0
        if(i === 0){
            digit.unshift(1)
        }
    }
    return digit
}


digits = [9]

console.log(plusOne(digits))
