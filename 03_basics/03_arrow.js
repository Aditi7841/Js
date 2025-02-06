const user = {
    userName: 'Hitesh',
    price: 300,
    welcomeMessage: function()
    {
        // console.log(`${this.username}, welcome to website`);// this returns current context
        // console.log(this);
    }
    

}
user.welcomeMessage();
//console.log(this); //// in node - if 'this' is in global scope returns '{}', in browser - it returns window object 


// const arroFunction = (num1, num2) => { // if we are adding '{}' then we need to add return
   
//     return num1 + num2;
// }

//console.log(arroFunction(2,4))


//const arrowFunction = () => num1+num2 // implicit return

// const arrowFunction = () => 
// (
//     num1+num2
// )

const arrowFunction = () => ({userName: 'Arun'})
console.log(arrowFunction())

// const abc = {
//     name: 'adi',
//     age: 22,
//     arrw: () => {
//         console.log(`Hi ${this.name}`) // here we are using arrow function but we are getting undefined in the output
//     }
// }
//console.log(abc.arrw());

const abc = {
    name: 'adi',
    age: 22,
    arrw: function (){
        console.log(`Hi ${this.name}`) // here we are using normal function and getting actual value in the output
    }
}
console.log(abc.arrw());