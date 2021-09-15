//javascript

// Variables, Array, Functions, Loops, Classes, Objects


c = 20; // Global variable(Global Scope)
var d = 30; // Function Scope
let e = 50; // Block Scope


let b = [1, 2, 3, 4, 5];

function fun(){
    let a = 5;
    if(a == 5){
        let b = 10; 
        // block scope so b will be printed as
        // 10;
        console.log(b);
    }
    // here b = 10 will not be printed because
    // b was inside the block and scope was also
    // block scope(it was declared with let keyword).
    // so the b array will be printed.
    console.log(b);
}


function print(){
    let a = 5;
    if(a == 5){
        let f = 10;
        console.log(f);
    }
    // it will give compile error as there is not
    // f is declared here in the function block or
    // the globally.
    console.log(f);
}

fun();

// there is not specified return type value in 
// javascript functions. we can return any value
// from functions.

console.log(square_root(10));
function square_root(n){
    return Math.sqrt(n);
}
console.log(square_root(10));




// this will error as sqrt_n() is not a
// function if we try to call it before 
// function is actually defined.
sqrt_n(10);
// Function Hoisting
var sqrt_n = function(){
    console.log("Inside the second square root fn");
    return;
}