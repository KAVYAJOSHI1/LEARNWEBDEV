//toLocaleSring method returns a string value of a number with the specified locale
let num=45;
num=num.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
console.log(num);