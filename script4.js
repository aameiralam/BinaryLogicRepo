// Operators

// Arithmetic operators +, -, *, /, %(modulus), ++, --
//  modulus - will give you the remainder of two values


// Assignment operators

// =, +=, -=, *=, /=, %=, **=

// Comparison operators

// ==, ===, != (not equal), !==, >, <, >=, <=

// logical operators

// AND && , OR ||, NOT !

// Ternanry operators

// ?




// ++ , - -

let h= 10;
h++; (h+1)
console.log(h);
h--;(h-1)
console.log(h);

i=5, j= 8
l= i++ + j++ ;
l= 13; 
// (because it takes the original number before the execution of the arithmetic.)




// ..........................................................................

// +=

let d=10;
d+= 20; 
// d=d+20
console.log(d);

d -= 5; 
// d=d-5 = 30-5 =25
console.log(d); 25


d *=5; 
//  d = d*5 = 25 *5 = 125

console.log(d);

l /= 25;

console.log(d)
// d = d/25 = 5;

d %= 2; 
// d= d%2=1
console.log(d); 1



// Comparison operators

// any compariosn output will always be a boolean output (true/false)

let o=10;
let n=11;

console.log(n == o); 
// answer will be false

console.log(10=="10"); 
// true, this equal says value same, it will consider equals even if type is different

console.log(10==="10");
// false, consdiers both value and data type, strict equal

console.log(      10     !==     "10"     ); true
//             (10,number)       (10,string)  this is a strict equal


// logical operators

//  and - if all conditions are true then the output is true
//  or - any one of the condition is true then the output is true


                //  true        and   true   or       true   and   true
console.log ((("blue" == "blue") && (5>2))  ||  ((65%5 == 0) && (16 >= 16)));  true


//              true and  false      or    true
console.log  ((true && ( 6*2 >= 15)) || ( 5+10 === 15)); true



//                true      or     true       and       !( true      or     true) =false
console.log ((("a" === "a") || ("b" == "b"))  &&  !(( "c"  !=="d")  || ("d" != "e") )); 




// Ternary operators



console.log( 10 == 10 ? "equal" : "not equal");
//      print            if true    if not true



























































