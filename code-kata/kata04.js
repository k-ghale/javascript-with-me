

// #20 - Valid Parenthesis

var isValid = function (s) {
    let stack = []
    let characters = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    for (const char of s) {
       if (char in characters) {
           if(stack.length && stack[stack.length - 1] === characters[char]{
               stack.pop()
           }else {
               return false
           }
       }
        else{
            return false
        }
    }
    else{
        stack.push(char) 
    }
  return stack.length == 0 
}
