
var x = 10;

//function statements
function sum(){
    console.log("in sum...no args");
}
//implicit args: this, arguments
function sum(x, y){
    console.log("in sum...", x, y);
    console.log(arguments);
}

sum(2, 3);
sum();
sum(2,3,4,5);

//function expression
const add = function(a, b){
    return a + b;
}

//arrow function

//concise
// no implicit args: this, arguments
// asynchonous callback, functional prgm
let calc = (a, b)=>{
    return a + b;
}
calc = (a, b)=> a + b;




