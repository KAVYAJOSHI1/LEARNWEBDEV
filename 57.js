//date
let date=new Date();
//let date=new Date(2023,0,1,2,3,4,5);
let year=date.getFullYear();
console.log(year);
date=date.toLocaleString();
document.getElementById("label").innerHTML=year;
