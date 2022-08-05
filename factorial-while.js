    let  i;
    let myMultification = 1;
function factorial (i) {
    while (i >= 1){
        myMultification*= i;
        i--;
    }
    return myMultification;
}

let getResult = factorial (6);
console.log(getResult);