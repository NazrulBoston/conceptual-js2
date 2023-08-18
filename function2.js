// akta array ar moddhe onek gulo nam ase oi khan theke sobchea boro namti print karte hobe

function biggestFriend(friends){
    let biggest = friends[0];
    for ( let i = 1; i < friends.length; i++){  // akhane let i = 1 number theke suru kara hoese bcs amr prothomt dore nisi biggest frind
        if(friends[i].length > biggest.length){
            biggest = friends[i];
        }
    }
    return biggest;
}

const friends = [ 'arif', 'bilal', 'aminul', 'noman', 'rubel', 'jahangir']

console.log(biggestFriend(friends))

