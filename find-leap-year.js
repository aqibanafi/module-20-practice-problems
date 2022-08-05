let leapYear = [2023, 2024, 2025, 2028, 2030];
let newData = [];
function findLeapYear (leapYear) {
    for(i = 0; i < leapYear.length; i++){
        // console.log(i, leapYear[i]);
        if (leapYear[i] % 2 ===0){
            newData.push(leapYear[i]);
            

        }
    }
    for(i = 0; i < newData.length; i++){
        console.log(i, newData[i]);
    }
}


findLeapYear (leapYear);