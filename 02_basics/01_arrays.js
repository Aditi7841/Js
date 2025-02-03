//**************** Array *******************/

const arr = [1,2,3,4,5];
const arr1 = new Array(6,2,3,4,5,6)
const arr2 = ['aman', 'ayushi'];
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
//array metthods
const updatedarr = arr.push(6);
arr.unshift(10);//adds element at the start of the array
arr.shift();

const test = arr.includes(11);
const test2 = arr.indexOf(11);
// console.log(test);
// console.log(arr);


const newArr1 = arr.slice(1,3);
console.log(newArr1);
console.log('original array after slice', arr);

const newArr2 = arr.splice(1,4);
console.log(newArr2);
console.log('original array after splice', arr);
