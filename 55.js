//setTimeout()

function firstmsg(){
    alert(`Buy this course for $500`);
}
function secondmsg(){
    alert(`This is not a scam`);
}
let item ="laptop";
let price=500;
let i=setTimeout(firstmsg,3000);
let j=setTimeout(secondmsg,6000);

document.getElementById("mybutton").onclick=function(){
    clearTimeout(i);
    clearTimeout(j);
}