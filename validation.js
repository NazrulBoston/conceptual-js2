 // function ar parameter ar man jokhon return pai tokhon number ar porborte
 // string br true, false die disi, othoba parameter a string ar poriborte number
 // return karsi, tahole function kaj karbena, aijonno ai problem theke rokkha pabar
 // jonno validation kara hoi


 function add (a,b){
 if(typeof a !==  'number' || typeof b !== 'number'){
    return 'Please give me a number'
 }
 return a+b;
}

console.log(add(2,'u'))