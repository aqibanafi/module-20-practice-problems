let arr = [5, 7, 8, 10, 45, 30];
let oddArray = [];
let sum = 0;

function findOddSum (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){
            oddArray.push(arr[i]);
        }
    }
    for (let i = 0; i < oddArray.length; i++){
        sum+= oddArray[i];
    }
    return sum;
}
let output = findOddSum (arr);
console.log("The Sum of All Odd Numbers are: ", output);