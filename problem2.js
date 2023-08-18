// akta object theke function ke kisu information pathai, sei onujaie funciton
// amake akta sentence banie dibe


function information(info) {
    const sentence = 'My name ' + info.name + ' I am ' + info.age + ' years old ' + ' gender ' 
    + info.gender  + " I live in " + info.address;
    console.log(sentence);
}



const myInfo = {
    name: 'Nazrul',
    age: 36,
    gender: 'male',
    address: 'Boston'

}

information(myInfo);
