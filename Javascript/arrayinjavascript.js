

let arr = ["Apple", "Mango", "Banana"];
console.log(arr); // prints the whole array.
console.log(arr[0]);
console.log(arr.length); // return the length of array


// we can iterate over arr like this.

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}


arr.push("Guava"); // Insert at the back of array
console.log(arr);

arr.pop();// remove from the back
console.log(arr);

arr.shift(); // remove from the front
console.log(arr);

arr.unshift("Kiwi"); // insert at the front
console.log(arr);

console.log(arr.indexOf("Kiwi")); // return the index of specified element
