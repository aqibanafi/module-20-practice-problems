let calculate;
function hourToSeconds (hour) {
    calculate = hour * 3600;
    return calculate;
}
let output = hourToSeconds (4);
console.log(output, 'Seconds');