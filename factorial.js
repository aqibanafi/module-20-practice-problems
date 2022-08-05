let sum = 1;
function factorial (){
    for (i = 6; i >= 1; i--){
        console.log(i);
        sum *= i;
        console.log(sum);
    }
}

factorial ();