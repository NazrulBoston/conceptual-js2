// amra akhon array ar validation karbo r array ar validation indexof die kara jabe na
// array ar validation karte hoi if(!Array.isArray(arr))

function findSum(arr){
if(!Array.isArray(arr)){
    return 'Please provide an array'
}

let sum = 0;
for ( let i of arr){
    sum += i;

}
return sum;

}

const numbers = [ 1, 4, 6, 5, 9, 7]
console.log(findSum('hello'))  // akhane hello isse kara lekha hoese check karar jonno, akhane usually hobe numbers