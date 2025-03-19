

let myArray = [7,12,9,4,11]
let minVal = myArray[0]

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < minVal) {
       minVal = i 
    }
}

console.log(myArray[minVal])

//Bubble Sort
function bubSort(array){
    for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1])  {
               const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp 
            }        
       } 
    }
    return array
}

//Selection Sort

function selSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[min] > arr[j]){
                min = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

let my_array = [64, 34, 25, 12, 22, 11, 90, 5]

console.log(bubSort(my_array))
console.log(selSort(my_array))

