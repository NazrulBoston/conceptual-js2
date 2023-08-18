
// // First part---> 3 vabe objects ar value k access kara jai

// const person ={
//     name: 'Nazrul Islam',
//     age : 36,
//     address: 'Boston',   
//     phone: 384935354643 
// }
// //dot notation die access kara hoese
// console.log(person.address) 

// // bracket notation die access
// console.log(person['age'])  

// // variable ar moddhe asign kare oi variable k print
// const cellPhone = 'phone';
// console.log(person[cellPhone]);




// 2nd part ---> object ar sokol property and values k string akare kivab akta 
// array ar moddhe paoa jai

// const person ={
//     name: 'Nazrul Islam',
//     age : 36,
//     address: 'Boston',   
//     phone: 384935354643 
// }

// const keys = Object.keys(person);
// console.log(keys)
// const values = Object.values(person)
// console.log(values)




// // 3rd part ---> for of loop and for loop use kare object ar pratiti values dekhbo
// // ai object ar key gulo k use kare

// const person ={
//     name: 'Nazrul Islam',
//     age : 36,
//     address: 'Boston',   
//     phone: 384935354643 
// }

// const keys = Object.keys(person);
// const values = Object.values(person)
// // console.log(keys)
// // console.log(values)

// //for loop 
// // for(let i = 0; i < keys.length; i++){
// //     const key = keys [i];
// //     console.log(person[key]);
// // }


// //for of loop
// for (let key of keys){
//     console.log(person[key])
// }




//for in loop use kara hobe property name gulo string akare asbe
// for loop ba for of array ar upor chalaite parben but object ar moddhe loop 
// thru karte hole for in chalaite hobe
// fon in loop ta object ar moddhei cahlanor jonnoi create hoise


// const person ={
//     name: 'Nazrul Islam',
//     age : 36,
//     address: 'Boston',   
//     phone: 384935354643 
// }

// for(let i in person){
//     console.log(i);
// }
