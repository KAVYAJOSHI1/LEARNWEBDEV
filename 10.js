//slice() method gives a new string
let name="kavya joshi";
let firstname;
let lastname;
//firstname=name.slice(0,5);
//lastname=name.slice(6,11);
firstname=name.slice(0,name.indexOf(" "));
lastname=name.slice(name.indexOf(" ")+1);
console.log(firstname);
console.log(lastname);