let score = '33aa';

console.log(typeof(score));
let valueOfNumber = Number(score);
console.log(valueOfNumber);

// '33' => 33
// '33aa' => NaN
//  null => 0
// undefined => NaN
// true => 1

let isLoggedIn = 0;
let booleanIsLoggedin = Boolean(isLoggedIn);
console.log(booleanIsLoggedin);

// 1 => true 0 => false
// '' => false 
// 'abc' => true

let someNumber = 33;
let stringSomeNumber = String(someNumber);
console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

//***********************Operatins**********************/
let str1 = 'abc';
let str2 = 'pqr';

let str3 = str1 + str2;
console.log(str3);

// console.log(1 + '1');
// console.log('1' + '1');
// console.log('1' + 1);
// console.log(1 + 1 + '1');
// console.log('1' + 1 + 1);

console.log(+true);
//console.log(true +);//wont work
let x = 3;
let y = 5; 
let b = ++x;
let c = y++;
//***********Increament *********************/
console.log('value of b', b);
console.log('value of c', c);