// Generics in Typescript
/** 
 * - Generics highly reinforece the DRY principle.
 
 * - They allow you to create functions or data structures that can work with any data type.
 
 * - Generics are used for creating reusable components
 
 *  - Difference between Union Types and Generics:
 * using union types can also allow functions to accept parameters of multiple data types. Union types are more suited for scenarios where the function needs to accept a fixed set of known data types, whereas generics allow for a more flexible and dynamic approach. Also, Generics can sometimes lead to better performance optimizations because they allow TypeScript to infer and specialize types at compile time.
 
 * - 'any' vs 'Generic Functions'
 * 'Generic functions' in TypeScript provide a type-safe and reusable way to work with a variety of data types, promoting code readability and maintainability. In contrast, using 'any' sacrifices type safety and readability, making code harder to understand and maintain
 * 
 * - You cannot directly pass a value (like a number or a string) as a type argument in TypeScript. Type arguments in generic functions are meant to specify types, not actual values.
 */


// Generic Functions accepting array as parameter

const getLength = <T,>(arr:T[]):number =>{ // <T,> the comma differentiates between JSX elements and generics (Optional)
return arr.length;
}

let myArray1 : Array<number> = [1,2,3,4,5]
let len1 = getLength(myArray1)
 
let myArray2 : Array<string> = ["Mbappe","Bellingham","Haaland","Palmer","Foden"]
let len2 = getLength(myArray2)
 

// console.log(len1);
console.log(len2);








//0 - Identity function eg: A function that returns whatever it gets as arguments
// const returnVal = <T> (name:T):T => { // T -> Data Type (lets assume)
//   return name;
// }

// interface Bottle {
//   color:string,
//   capacity:number
// }

// const bottle1 : Bottle = {
//   color:"blue",
//   capacity:1
// }

// returnVal(bottle1) // We can also pass custom data types as type arguments of generic functions






// const myName = returnVal<string>("Deb") // without using inference (explicitly mentioned)
// const myName = returnVal("Deb") // using tsc inference
// TypeScript's type inference system sometimes chooses literal types when it can be certain about the exact value, that is why tsc interprets as follows: const myName: "Deb"
// const myAge = returnVal<number>(20)
// const isMale = returnVal<boolean>(true)

// console.log(myName);
// console.log(myAge);
// console.log(isMale);



// 1.  By using generics in a type alias, you create a flexible structure that can adapt to different data types. In your example, myType<DataType> can accept any type for DataType, making it versatile and reusable.

 /* type myType<DataType> = { 
  data:DataType  // Setting the data type of 'data' dynamically
}

type type1 = myType<200> 
type type2 = myType<"200">
type type3 = myType<true> */


//2. Using generics with a function makes the function applicable to all data types but still ensuring Type Safety.
/*
const printNumber =<DataType> (x:DataType) : void =>{
console.log(x);
}

printNumber<string>("10")
printNumber<number>(10)
printNumber<boolean>(true)
*/


//3. Using generics with arrays allows you to create flexible and type-safe arrays that can contain elements of any specified type. 
// const getFirstElement = <ElementType>(array:ElementType[])  => {
//   return array[0]
// }

// let first = getFirstElement<string>(["1","2","3","4","5"])
// console.log(first); // 1 will be the output


// const myArray : number[] = [1,2,3,4,5]
// const firstNumber = (getFirstElement(myArray))

// const myString = ['one','two','three']
// const firstCharacter = getFirstElement(myString)
// console.log(firstCharacter);





// Type Casting in TypeScript

// let x : any = 180

// let myRollNumber:string = <string>x // Typecasting x to string

// To typecast a variable, the initial type of the variable should be 'unknown' or 'any'


// myRollNumber.toUpperCase()





// Interfaces in TypeScript
/**
 * - Very similar to Type Aliases
 * Interfaces VS Types:
 * Interfaces support inheritance, allowing them to be extended by other interfaces and implemented by classes, while type aliases are just aliases for existing types and do not support inheritance or implementation. Also, Type aliases can use intersection types (&) to achieve a form of inheritance, while an interface can use the 'extends' keyword to directly inherit from another class or interface.
 * Apart from these, the 2 are almost same in every aspect. 
 */

// interface Car {
//   company: string,
//   color: string,
//   price: number,
//   drive: (maxSpeed:number) => void
// }

// // Reopening an interface 
// interface Car{
//   manufactureDate:number,
// }

// // inheriting an interface
// interface SuperCar extends Car{
//   flySpeed:number,
//   swimSpeed:number
// }

// let bmw: Car = {
//   company: "BMW",
//   color: "Red",
//   price: 50_000,
//   manufactureDate : 2020,
//   drive:(speed)=>{
//     console.log("Driving @ "+speed+" km/h.");
    
//   }
// }

// let mySuperCar : SuperCar = {
//   company: "Lamborghini",
//   color: "Blue",
//   price: 200_000,
//   manufactureDate : 2020,
//   drive:(speed)=>{
//     console.log("Driving @ "+speed+" km/h.");
//   },
//   flySpeed:500,
//   swimSpeed:200
// }



// console.log(bmw);
// console.log(mySuperCar);

// bmw.drive(100)















// Nullable types

// const greet = (name: string | null | undefined) => {
//   console.log(name?.toLowerCase());
// }

// greet('SCOUSER')




// Literal Types
/*
type possbileGender = "male" | "female"
const gender : possbileGender = "female"
// The variable gender can have either "male" or "female" value

*/

// Intersection Types
/*
type Camera = {
  lens:string
}

type Computer = {
  processor: string
}

const smartPhone : Camera & Computer = {
  lens:"Sony",
  processor:"Exynos"
}

console.log(smartPhone);
*/


// Union types
/*
const verifyDrivingPermit = (age: number | string): void => {
  // Narrowing
  if (typeof age === "number") {
    if (age > 18)
      console.log("PERMIT GRANTED.");
    else
      console.log("PERMIT DENIED");

  } else {
    if (Number(age) >= 18)
      console.log("PERMIT GRANTED");
    else
      console.log("PERMIT DENIED");
  }
}


verifyDrivingPermit("2") */



// -- Type Aliases
/*
type Fighter = {
  readonly name:string,
  weightClass:string,
  netWorth:number,
  wins:number,
  retire: (age:number)=>void
}

let fighter1 : Fighter = {
   name:"Charles Oliveira",
  weightClass:"lightweight",
  netWorth:10_00_000,
  wins:30,
  retire(age) {
      console.log(`Charles has decided to retire at ${age} years old.`);
  }
}

fighter1.retire(100) */

// --Objects in TS
/**
const fighter : {
  readonly name:string,
  weightClass:string,
  netWorth:number,
  // wins?:number // optional key-value pair
  wins:number,
  retire: (age:number)=>void
} = {
   name:"Conor",
  weightClass:"lightweight",
  netWorth:5_00_00_000,
  wins:1,
  retire: (age) => {
      console.log(`${this.name} has decided to hang the gloves at the age of ${age}`);

  },
}

fighter.wins = 25;
fighter.retire(36) */
// fighter.name = "Khabib" // Not allowed
// console.log(fighter);





// --Functions in TS
// function greet(name:string,age = 18 ){
//   console.log(`Good Morning, ${name}`)
//   console.log(`You have ${age} years of experience.`)
//   // if(age>18){
//   //   return "PASSED"
//   // }else{
//   //   return "FAILED"
//   // }
// }

// greet("Debanjan",21)


// -- Enums : Group of related constants (Only 1 can be used at a time)

// const enum Grades {Poor = 1, Decent, Excellent};
// let myGrade : Grades = Grades.Decent;
// console.log(myGrade)


// -- Tuples
// let user : [number,string] = [1,"Debanjan"];
// user.push(20) // How tf can I push values into the tuple?

// let player : [string,number] = ["Cole",23]
// The tuple 'player' is an array consisting of 2 elements of which the 1st element is a string and the second element is a number


// -- Arrays
// let names : string[] = []
// names[0] = "Arthur"
// names[1] = '10'

// let numbers = [1,2,3,4,5]
// numbers.forEach(num=>num.toFixed())
// console.log(numbers);


// let team:string = "Chelsea"
// let rating:number = 7.5
// let isGoodEnough = true;

// const greet = (nickname:string) =>{
//   console.log(`${nickname} is back baby!`)
// }

// greet('The Notorious')