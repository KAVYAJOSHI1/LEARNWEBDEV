//arrays
let fruit=["apple","mango","banana"];
console.log(fruit);
console.log(fruit[0]);
fruit[0]="orange";
console.log(fruit);
fruit.push("lemon");//add an element
console.log(fruit);
fruit.pop();//remove an element
fruit.unshift("mango");//add element to beginning
fruit.shift();//remove element from beginning
let length=fruit.length;

console.log(length);
let index=fruit.indexOf("mango");
console.log(index);

console.log(fruit);