let count=0;
/*function increasecount()
{
  count+=1;
  document.getElementById("mylabel").innerHTML=count;
}
function decreasecount()
{
  count-=1;
  document.getElementById("mylabel").innerHTML=count;
}*/
document.getElementById("increasebutton").onclick=function()
{
    count+=1;
    document.getElementById("mylabel").innerHTML=count;
}
document.getElementById("decreasebutton").onclick=function()
{
    count-=1;
    document.getElementById("mylabel").innerHTML=count;
}