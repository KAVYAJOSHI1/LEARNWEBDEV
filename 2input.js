/*to accept username
let username=window.prompt("Whats your name");
console.log(username);
Difficult way*/
let username;
document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML= "Hello "+username;
}
