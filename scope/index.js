//first example
// var guessMe = 2;
// console.log(guessMe);
// (function(){
//     console.log(guessMe);
//     var guessMe = 4;
//     console.log(guessMe);
// }());

// console.log(guessMe);

// //second example
// let guessMe = 1;
// console.log( 'guessMe: ', guessMe );// A: guessMe is 1
// {
//     // Temporal Dead Zone of guessMe
//     //console.log( 'guessMe: ', guessMe ); <- This would give an error
//     let guessMe = 2;
//     console.log( 'guessMe: ', guessMe );// C: guessMe is 2
// }
// console.log( 'guessMe: ', guessMe );// D: guessMe is 1


//example three

var guessMe1 = 1;
let guessMe2 = 2;

{
    console.log(guessMe1, guessMe2)
    try {
        console.log( guessMe1, guessMe2 ); // (A)
    } catch(err) {
        console.log("Error");
    }
    
    let guessMe2 = 3;
    console.log( guessMe1, guessMe2 ); // (B)
}

console.log( guessMe1, guessMe2 ); // (C)

const print_func = () => {

    console.log( guessMe1 ); // (D)
    var guessMe1 = 5;
    let guessMe2 = 6;
    console.log( guessMe1, guessMe2 ); // (E)
};


console.log( guessMe1, guessMe2 ); // (F)