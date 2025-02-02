//Primitive
// 7 type of variables
// Number, string, boolean, null, undefined, symbol, BigInt

const a = 100;
const b = 'anc';
const c= null;
let d;
const e = Symbol('123');//makes unique
const f = Symbol('123');
console.log(e===f);


// Reference (Non primitive)

// array, object and function

const heros = ['Naga', 'shaktiman'];
//Object declaration
let myObj ={
    name: 'Arjun',
    age: 23
}

//function

const myFunction = function()
{
    console.log('Hello world');
}
myFunction();

//******************Memomry*******************//

//stack(primitive) we will get the copy original value wont change
//heap(non-primitive) we will get reference of original value

let primitiveMemry1 = 'Anushka';
let primitiveMemory2 = primitiveMemry1 ;
 primitiveMemory2 = 'Rakesh'

console.log(primitiveMemry1);
console.log(primitiveMemory2);

//Heap//
 let userOne = {
    email: 'abc@gmail.com',
    age: 10
 }

 let userTwo = userOne;
userOne.email = 'xyz@gmail.com' 
 console.log(userTwo);
 console.log(userOne);