// do this with while loop functions

// while loop

// initialization

// while(condition){
    // logic code
    // increase or decrease
    


// Write a code for 5,10,15......450

function fiveMultiple() {
    let n1 = 5;
    while (n1 <= 450) {
        console.log(n1);
        n1 = n1 + 5;
    }
}

fiveMultiple();


// write a code 333, 330, 327..... 30;

function threeMultiple() {
    let n2 = 333;
    while (n2 >= 30) {
        console.log(n2);
        n2 = n2 - 3;
    }
}
threeMultiple();

// find even numbers between 50 and 150


//3.
function evenNumbers() {
    let n3 = 50;
    while (n3 <= 150) {
        if (n3 % 2 === 0) {
            console.log(n3);
        }
        n3 = n3 + 1;
    }
}
evenNumbers();


// use any loop
// Find a leap year from 1900 to current year (HW)

//4.
function findLeapYears() {
    let n4 = 1900;
    while (n4 <= 2024) {
        if ((n4 % 400 == 0) || (n4 % 4 == 0 && n4 % 100 != 0)) {
            console.log(n4)
        }
        n4++;
    }
}
//execution
findLeapYears();

// for(initialization ; condition; increment / decrement){
// code => n number of times


