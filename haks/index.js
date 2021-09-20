// function addCalendarEntry( event, date, len, timeout ) {
//     console.log(event)
//     date = typeof date === 'undefined' ? new Date().getTime() : date;
//     len = typeof len === 'undefined' ? 60 : len;
//     timeout = typeof timeout === 'undefined' ? 1000 : timeout;

//    return {
//         date,
//         len,
//         timeout
//     }

//     // ...
// }
// const {date, len, timeout} = addCalendarEntry( 'meeting' );


// function addCalendarEntry( event, date, len, timeout ) {
//     date = date || new Date().getTime();
//     len = len || 60;
//     timeout = timeout || 1000;
//     // ...
// }
// addCalendarEntry( 'meeting' );

function addCalendarEntry( 
    event, 
    date = new Date().getTime(), 
    len = 60, 
    timeout = 1000 ) {

    return {
        event,
        date,
        len,
        timeout
    };
}
var {event, date, len, timeout} =addCalendarEntry( 'meeting' );
console.log(event); //outputs the default value set earlier
console.log(date)
console.log(len)
console.log(timeout)

function f( a = 'a0', b = 'b0' ) { 
    console.log(a,b)
 }
 f()

 function printArgs( first = 'No arguments' ) {
    console.log( arguments);
}

printArgs();


// Exercise 1:#
// Write a function that executes a callback function after a given delay in milliseconds. The default value of delay is one second.

// The setTimeout() method can be used to specify the time delay before a function is executed.

function executeCallback( callback, delay = 10000 ) {
    console.log('Delay: ' + delay);
    setTimeout(callback,delay)
  }
  
  //Edit above this line 
  executeCallback( () => console.log('Done'));



//   Exercise 2:#
// Change the below code such that the second argument of printComment has a default value that’s initially 1, and is incremented by 1 after each call.

// Select the show console button in the widget below to see your output.

function printComment( comment, line ) {
    console.log( line, comment );
}


//Edit above this line

for (var i = 1; i <= 5; i++)
  printComment('I should be lineNumber ' + i, i);


//   Exercise 3:#
// Determine the values written to the console before executing this script.

  function argList( productName, price ) {
    console.log( arguments.length ); //(A) 1
    console.log( productName === arguments[0] ); //(B)true
    console.log(arguments)
    console.log( price === arguments[1] ); //(C)true
};

argList( 'Krill Oil Capsules',100 );