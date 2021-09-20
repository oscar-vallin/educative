// function sum1(a,b) {
//     return a+b
// };

// console.log(sum1(2,2))
// var sum = function( a, b ) {
//     return a + b;
// };
// console.log(sum(2, 3));

// var sum2 = (a,b) => a+b;
// console.log(sum2(3,3))

//  var Ball = function( x, y, vx, vy ) {
//      this.x = x;
//      this.y = y;
//      this.vx = vx;
//      this.vy = vy;
//      this.dt = 25;  //1000/25 = 40 frames per second

//      setTimeout( function() { 
//          this.x += vx;  
//          this.y += vy;
//          console.log( this.x, this.y );
//      }, this.dt );
  
//  }
//  var ball = new Ball( 0, 0,1, 2 );

//  var Ball = function( x, y, vx, vy ) {
//      this.x = x;
//      this.y = y;
//      this.vx = vx;
//      this.vy = vy;
//      this.dt = 25;  //1000/25 = 40 frames per second
//      var self = this;
//      setTimeout( function() { 
//          self.x += vx;  
//          self.y += vy;
//          console.log( self.x, self.y );
//      }, this.dt );
//  }

//  var ball = new Ball( 0, 0, 1, 2 );

class people {
    constructor(fullName) {
        this.lastName = fullName
        this.person;

        return this.person = {
            name: "oscar",
            walking: () => this.lastName
        };
    }
}


const res = new people('oscar vallin');

console.log(res.walking())