// find the largest number from an array
//ami janina amar array ar moddhe sobchea boro number konti 
// ar jonno amra dhore nibo j prothom element tai sobchea boro
// let largest = arr[0]  aivabe likhte hobe, amra dhorsi j fonr loop
// ar man nibo 1 theke

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {  // akhane let i = 1 number theke suru kara hoese bcs amr prothomt dore nisi biggest frind
        const currentItem = arr[i];
        if (currentItem > largest) {
            largest = currentItem;
        }
    }

return largest;

}

const number = [5, 23, 35, 54, 6, 8, 87,];
const largNumber = findLargest(number);
console.log(largNumber)

