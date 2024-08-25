//TO find hypotenuse of a triangle
let a;
let b;
a=window.prompt("ENTER A");
b=window.prompt("ENTER B");
a=Number(a);
b=Number(b);
let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("HYPOTENUSE IS: ",c);