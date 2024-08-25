let a;
let b;
let c;
document.getElementById("submitbutton").onclick=function(){
a=document.getElementById("atextbox").value;
b=document.getElementById("btextbox").value;
a=Number(a);
b=Number(b);
c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
document.getElementById("clabel").innerHTML="HYPOTENUSE IS: "+c;

}