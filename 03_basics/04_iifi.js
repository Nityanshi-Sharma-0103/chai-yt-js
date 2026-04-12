// immediatelty invoked function expression (iife)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // un-named iife
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('hitesh')