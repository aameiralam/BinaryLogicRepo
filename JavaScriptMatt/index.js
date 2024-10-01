// declaringfunctions


// use the function name

function sayHello () {
    console.log("Hello, World!")
}

sayHello()

// arrow function
const koko = () => {
    console.log("This is arrow function")

}

// Constructor function

const multiply = new Function('a','b','return a * b')

console.log(multiply(3,5))

// Hoisting
greet()
function greet(){
console.log("Hello, Sam")
}

// Anonymous function

(function () {
    console.log("Im an unnamed function")
})()


// function scoped-global access

var example1

// block scoped- its inside the block scope

let example2

//blocked scoped
// not reassignable 
// const example3
// example3 = "Joe"


// function fetchData(){
//     fetch("https://rickandmortyapi.com/api/character",{
//         method: 'GET'
//     }).then(res => res.json())
//     .then(data => console.table(data.results))
//     .catch(err => console.error(err.message()))
// }

// fetchData()


//making an object
const car = {
    "engine" : "v6 engine",
    "transmission" : "Automatic",
    "mileage": 12000,
    "doors": 5,
    "battery" : "15v"
}

console.log(car.engine)
// console.log(car("engine"));

car.color = "blue"

delete car.mileage

console.table(car)

function Car(engine, make, model) {
    this.engine = engine
    this.make = make
    this.model = model
    this.start = function(){
        console.log(this.engine + "is started")
    }
}

const car2 = new Car("V8 engine", "chevy", "corvette")

console.table(car2)





// creating a class

class Vehicle {
    constructor(engine, make, model) {
        this.engine=engine
        this.make = make
        this.model=model
    }

    start(){
        console.log(this.engine + " is started")
    }
}

const car3 = new Vehicle("HEMI", "FORD", "F150")
console.table(car3)
car3.start()



// Inheritance

Vehicle.prototype.stop = function() {
    console.log(this.engine + " has stopped")
}
car3.stop()

class Animal {
    constructor(name) {
        this.name = name
    }

speak(){
    console.log(this.name + " makes a noise.")
}


}

class Dog extends Animal {
    speak(){
        console.log(this.name + " Barks!")
    }
}

const dog = new Dog("Rime")
dog.speak()

console.log(Object.keys(dog)) //keys - properties

console.log(Object.values(dog)) // values of the object


// Arrays are dynamic in javascript and they are not typesafe

let arr = [10, "hello", {"name":"Muhammad"}]

console.table(arr)

arr.push("nikita")
arr.shift() //removes the first element
//pop removes the last element
//unshift adds element
console.table(arr)

let name = arr.map((x => {
    return x
}))


console.log(name)

arr.forEach((x => {
    console.log(x)
}))



function fetchAnimals() {
    return new Promise((resolve, reject) => {
        console.log("Fetching simple animal data")

        setTimeout(() => {
            const data = {"name":"Rime", "animalType":"dog", "speak": () => console.log("Rime barks")}
            if (data) {
                resolve(data)
            }else{
                reject("Animal Data lost")
            }
        }, 2000)
    })
}

console.log(fetchAnimals())