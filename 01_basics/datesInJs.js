//********************* Date *************************//

let myDate = new Date()
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2000, 0, 1); //if it's an array month is starting from '0'.
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date('2000-01-1'); //if it's an string month is starting from '1'.
console.log(myCreatedDate1.toDateString());

let timestamp = Date.now();
console.log(timestamp);
console.log(Math.floor(timestamp/1000));
