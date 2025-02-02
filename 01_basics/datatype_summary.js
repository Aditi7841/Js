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