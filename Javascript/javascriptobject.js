// Object oriented programmig.

// javascript allows to create objects without defining the class

var bird = {
    x: 100,
    y: 50,
    color: "pink",
    eggs: [1,2,3,4],

    fly: function(){
        console.log("Bird is flying", this.x, this.y);
    }
};

bird.fly();
console.log(bird);
// we can acces properties using .operator.

console.log(bird.x);
console.log(bird.y);
console.log(bird.color);


// Normal For Loop
for(let i = 0; i<bird.eggs.length; i++){
    console.log(bird.eggs[i]);
}

// For Each Loop
bird.eggs.forEach(function(val, idx){
    console.log(val, idx);
})
