let arr = [2023, 2024, 2025, 2028, 2030];
let leapYearArray = [];
function findLeapYear (arr) {
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 4 === 0){
            leapYearArray.push(arr[i]);
        }
    }
    for(let i = 0; i < leapYearArray.length; i++){
        console.log(leapYearArray[i]);
    }
}

findLeapYear (arr);