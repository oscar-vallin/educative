//example 1 about classes in javascript
// class Shape {
//     constructor( age ) {
//         this.age = age;
//     }

//     adult(){
//         console.log('welcome')
//     }

//     younger(){
//        return console.log('i am sorry, but the access in blocked')
//     }
// }

// class Rectangle extends Shape {
//     constructor( age ) {
//         super( age );
//     }

//     access(){
//         if(this.age >= 18 ){
//             return this.adult()
//         }else{
//             return this.younger();
//         }
//     }
// }

// let rectangle = new Rectangle(  8 );
//  rectangle.access() 


//  //Example 2 super in my classes

//  class A { 
//     constructor() { 
//         console.log( 'A' ); 
//     } 
// }

//  class B extends A { 
     
//     constructor() { 
//         console.log( 'B' ); 
//     } 
// }
 
//  new B()
//  //outputs B
//  //but also gives an uncaught ReferenceError: this is not defined(…)
 
//  class C extends A {}
 
//  new C()
//  //> A
 
//  C.constructor
//  //> Function() { [native code] }


//  class User {
//     constructor() {
//         this.accessMatrix = {};
//     }
//     hasAccess( page ) {
//         return this.accessMatrix[ page ];
//     }
// }

// class SuperUser extends User {
//     hasAccess( page ) {
//         return console.log(page);
//     }
// }

// var su = new SuperUser();
// su.hasAccess( 'ADMIN_DASHBOARD' );


// Getters and Setters
// introduction to getters and setters, and their advantages

// Getters and setters are used to create computed properties.

// class Square {
//     constructor( width ) { this.width = width; }
//     get area() { 
//         console.log('get area');
//         return this.width * this.width;
//     }    
// }

// let square = new Square( 5 );

//second examples

class Square {
    constructor( width ) { 
        this.width = width; 
    }
    get height() {
        console.log( 'get height' );
        return this.width;
    }
    set height( h ) {
        console.log( 'set height', h );
        this.width = h;
    }
    get area() { 
        console.log( 'get area' );
        return this.width * this.height;
    }    
}

let square = new Square( 5 );
let print;

print=square.width;
console.log(print+'\n')
//> 5

print=square.height
console.log(print+'\n')
//> get height
//> 5

print=square.height = 6
console.log(print+'\n')
//> set height 6
//> 6

print=square.width 
console.log(print+'\n')
//> 6

print=square.area
console.log(print+'\n')
//> get area
//> get height
//> 36

print=square.width = 4
console.log(print+'\n')
//> 4

print=square.height 
console.log(print+'\n')
//> get height
//> 4