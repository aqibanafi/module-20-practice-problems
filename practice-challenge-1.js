
function leapYear (year) {
    if (year % 4 === 0){
        return true;
    } else {
        return false;
    }
}
let output = leapYear (2020);
console.log(output);