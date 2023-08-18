// function ar vitor ami kono array pathabo sethan theke amk jogfol dekhabe
// sudhumatro bijor songkhar jogfol dekhabe


function sumOfOdds(arr) {
    let sum = 0;

    for (let item of arr) {
        if( item % 2 === 1 ){  // if item k 2 die modules kari and setar man jodi 1 ase 
            sum = sum + item; // sudhu matro sei somoie amra sum ar sathe jog/add karbo
        }

    }
    return sum;

}

const numbers = [3, 5, 33, 45, 23, 44, 99, 54, 65, 4, 6, 7, 43,];
const total = sumOfOdds(numbers);
console.log(total);