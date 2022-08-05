let arr = [5, 7, 8, 10, 45, 30];
let sum = 0;
let result = [];

function addOddSum (arr){
    for(i = 0; i < arr.length; i++){
        let getResult = arr[i];
        if(getResult % 2 !== 0){
            console.log(i, getResult);
            result.push(getResult);
        }
    }
    for(i = 0; i < result.length; i++){
        sum+=result[i];
    }
    return ('Total : ' + sum);

} 

let finalOutput = addOddSum (arr);
console.log(finalOutput);



