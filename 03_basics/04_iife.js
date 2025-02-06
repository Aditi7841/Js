// Immediately invked function expression(IIFE)

(function abc()
{ //named iife
    console.log('Hello');
})();// semi column is required to write two iife

( () => (
    //unnamed iife
    console.log('Hello world')
))()