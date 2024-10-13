// Task : 4

/***

if you get more then 80 then inside your friend score. 
If your friend get more than 80. then go for a lunch. 
if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let myScore =125, friendScore=785;
if (myScore < 0 || myScore >100 || friendScore < 0 || friendScore >100) {
    console.log("Limit Over");
}

if (myScore >= 0 && myScore <=100 && friendScore >= 0 && friendScore <=100) {
    if(myScore > 80) {
        if(friendScore > 80) {
            console.log("Lets go for a lunch.");
        }
        else if(friendScore <80 && friendScore>=60) {
            console.log("Lets go for a lunch.");
        }
        else if(friendScore <60 && friendScore>=40) {
            console.log("keep your friend's message unseen.");
        }
        else if(friendScore <40) {
            console.log("block your friend.");
        }
    }
    
    else{
        console.log("go to home and sleep and act sad");
    }
}

    

