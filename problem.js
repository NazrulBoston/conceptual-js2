// akta array ar vitor kisu number ase funtion ar maddhome array ar element 
// gulo jogfol ber kara hoese for loop and for of loop use kare

function sumOfArray(arr) {
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}

// for(let item of arr){
//     // sum = sum + item;
//     sum += item;
// }


return sum;
}

const nums = [1, 2, 3, 4, 5],
totalValue = sumOfArray(nums);
console.log(totalValue)