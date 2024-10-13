// Task: 6
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let fare = 800, age =20 , student=false;

if(age < 10){
    console.log("For Children No bus fair is required")
    fare = 'Free';
}
else if(student==true) {
    fare = fare*.5;
}
else if(age>=60) {
    fare = fare*.15;
}

else {
    fare;
}
console.log(fare);