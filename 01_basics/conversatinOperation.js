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