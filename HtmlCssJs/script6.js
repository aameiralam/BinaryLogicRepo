// create a numbers from 500, 499,......400;

let ban=500;
while(ban>=400){
    console.log(ban);
    ban--;
}


console.log("...................");

// create a code, 50,51,52........350;
let ind=50;
while(ind<=350){
    console.log(ind);
    ind++;
}





// do while loop

// initialization
// do{
//   code
//   increase or decrease
//   }while(condition)

// if the conditions are not true it will still execute the loop once which is the initialization value


console.log(".................functions................")


function addTwoNumbers (a,b){
    // code
    let sum = a + b;
    console.log("The sum of "+ a + "" + b + "is" + sum);

    // calling out the function

    addTwoNumbers(10,15); 
    // you can do it without inputs as well
}





// create a function to check given input is divisible by 5


function divisible(a){
    if (a % 5 ==0)
    console.log("It is divisible by 5");
}

divisible(100);


// with else

function divisible(a){
    if (a % 5 ==0){
    console.log("It is divisible by 5");
    }else{
        console.log("no its not divisible by 5");
    }
}

divisible(100);
divisible(101);

// if you want to get a output after completing the task we use "return" keyword


function getMulTwoNumbers (num1,num2){
    let mul = num1 * num2;
    return mul;
}

let output= getMulTwoNumbers(10,20);
console.log(output);








