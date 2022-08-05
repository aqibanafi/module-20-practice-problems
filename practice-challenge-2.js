function ageCalculate (age) {
    if (age % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let output = ageCalculate (30);
console.log(output);