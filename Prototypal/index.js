function Shape( color, fullName ) {
    this.color = color;
    this.fullName = fullName;
}

Shape.prototype.getColor = function() {
    return this.color;
}

Shape.prototype.getName = function(){
    return this.fullName
}

function Rectangle( color,fullName, width, height ) {
    Shape.call( this, color, fullName );
    this.width = width;
    this.height = height;
};
console.log(Shape.prototype)
Rectangle.prototype = Object.create( Shape.prototype );


Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

let rectangle = new Rectangle( 'red','oscar valllin' , 5, 8 );
console.log( rectangle.getArea() );
console.log( rectangle.getColor() );
console.log(rectangle.getName())
console.log( rectangle.toString() );