//spread operator
let num=[1,2,3,4,5];
console.log(...num);
let maximum=Math.max(...num);
console.log(maximum);

let class1 = [10, 20, 30];
let class2 = [40, 50, 60];
let class3 = [...class1, ...class2];
console.log(class3)