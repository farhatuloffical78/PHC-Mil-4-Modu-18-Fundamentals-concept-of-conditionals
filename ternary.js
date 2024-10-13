
/**
 * TERNARY---> three parts
 * 
 * 
 *  condition ? do something when true : do something when false
 * 
 */

const age = 20;
// if(age >=18){
//     console.log('You can vote')
// }
// else{
//     console.log('Ghumai Jabo')
// }


/*
// simple ternary
 (age >=18) ? console.log('You can vote'): console.log('Ghumai Jabo');
  
 */
// let price = 500;
// const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }

// else {
//     price = price + 100;
// }
// console.log(price);

/* Using simple ternary 
(isLeader === true) ? console.log(price = 0): console.log(price=price + 100); */

// price = isLeader === true ? 0 : price + 100;

//semi ternary--semi advance

// if (isLeader = true) {
//     if(price > 1000) {
//         price = price /2;
//     }
//     else {
//         price = 0;  // price = price > 1000 ? price / 2 : 0

//     }
// }
// else{
//     price = price + 1000;
// }

let price = 500;
const isLeader = false;

price = isLeader === true ? 
            price = price > 1000 ? 
                        price / 2 : 0 
            : price +1000;
console.log(price);

// console.log(price);