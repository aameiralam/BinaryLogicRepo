// conditional statements 

// if else
// else if

//  if(condition){
// code
// }else{ 
// code



// check which one is greater


let a = 10;
let b = 15;

if(a>b){
    console.log("A is bigger than B");
}else{
    console.log("B is bigger than A");

}


// check a number is even number or odd number


let num1 = 135;


if(num1 % 2 == 0){
    console.log("num1 is even number");
}else{
    console.log("num1 is odd number");
}


// Check if given time is dinner time or not, dinner time is 8;

let time = 6;

if(time==8){
    console.log("lets go for dinner");
    
}else if(time<8){
    console.log("wait");
}else if(time>8){
    console.log("sorry, you are late");
}


// red - stop, green - go , yellow - slow down

let trafficLight = "yellow";

if(trafficLight=="red"){
    console.log("stop");
}else if(trafficLight=="yellow"){
    console.log("slow down")
}else if(trafficLight=="green"){
    console.log("go");
}else{
    console.log(trafficLight="invalid input");
}


// Switch Statement 

// switch(expression){

// case x:
// code
// break;
// case 2:
// code

// default:
// code
// }




switch(trafficLight){

case "red":
    console.log("stop, its from switch");    
    break;
case "green":
    console.log("go, from switch");
     break;    
case "yellow":
    console.log("slow down, from switch");
    break;


    default:
    console.log("invalid input");
    break;
}



// Looping statements

// for loops
// while loops
// do while loops


// for(initialization ; condition; increment / decrement){
// code => n number of times
// 


// keep adding 1 to a number for 10 times


let num4=100;

for(let loopcount = 0 ; loopcount < 10 ; loopcount++){
    num4++;
    console.log(num4);
}




// create a numbers from 500, 499,......400;


for( let num=500; num > 399; num--){
console.log(num);
}

// create a code, 50,51,52........350;

for(let x= 50; x<=350; x++){
    console.log(x);
}

// Write a code for 5,10,15......450


for(let y=5; y<=350; y = y+5){
    console.log(y);
}


// write a code 333, 330, 327..... 30;

for(let p=333; p>=30; p = p-3){
    console.log(p);
}


// find even numbers between 50 and 150


for(let even=50; even<=150; even=even+2){ 
    console.log(even);
}


51

for(let n=51; n<=150;n++){
    if (n % 2 == 0){
    console.log(n);
    }

}







// Find a leap year from 1900 to current year (HW)





// while loop

// initialization

while(condition){
    // logic code
    // increase or decrease
    
}
// 1,2,3,4,5,6


let i=pak;
while(pak<=10){
    console.log(pak);
    pak++;

}

console.log("heloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");


// create a numbers from 500, 499,......400;

let ban=500;
while(ban>=400){
    console.log(ban);
    ban--;
}


// create a code, 50,51,52........350;
let ind=50;
while(ind<=350){
    console.log(ind);
    ind++;
}



// Write a code for 5,10,15......450
// write a code 333, 330, 327..... 30;
// find even numbers between 50 and 150




















































