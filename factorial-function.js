// function ar vitor factorial 
//amra jani 0 and 1 ar factorial 1 tai amra nicher conditional ta use karbo
// then conditon sotto hole akhanei return karbo ar condition puron na hole
// next step jabo
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
     
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}




console.log(factorial(6));
console.log(factorial(0));
