
// Object Oriented programming

// Way 1-> To create javascript objects
function Fruit(taste, color){
    this.color = color;
    this.taste = taste;
}

let mango = new Fruit("sweet", "yellow");
let orange = new Fruit("sour", "orange");


console.log(mango);
console.log("Properties of Mango are:");
console.log(mango.taste);
console.log(mango.color);

console.log("Properties of Orange are:")
console.log(orange.color);
console.log(orange.taste);
console.log(orange);


// If we want to make mulitple fruit objects then we can make class using function
// Way 2-> To create javascript objects
var apple = {
    taste: "sweet",
    color: "red",
}


// Way 3-> To create javascript objects
// Class Declaration
class FruitClas{
    constructor(taste, color){
        this.color = color;
        this.taste = taste;
    }
}

let kiwi = new FruitClas("sour", "Green");
console.log("Properties of Kiwi are:");
console.log(kiwi);

// Way 4-> To create Objects in javascript
// Class expression.
// It will not be hoisted
//(means we can't create object before the declaration of fruitclass2)

let FruitClass2 = class{
    constructor(taste, color) {
        this.color = color;
        this.taste  = taste;
    }
}

let kiwi2 = new FruitClass2("sweet", "Green2");
console.log(kiwi2);