//Singletone
//const appUser = new Object();
//can be created of only constructor

// Object Literals
const MySym = Symbol('key1');
const MyObj = {
    name: 'ABC',
    age: 22,
    [MySym]: 'key1', // using symbol inside object
    "address": 'Pune',
    isLoggedIn: true
}

// console.log(MyObj['address']);
// console.log(MyObj.name);
// console.log(MyObj[MySym]);
// console.log(MyObj);

MyObj.greetings = function()
{
    console.log('Hello Js user');
}

MyObj.greetingsTwo = function()
{
    console.log(`Hello js user, ${this.name}`) // string interpolation
}

console.log(MyObj.greetings())
console.log(MyObj.greetingsTwo())