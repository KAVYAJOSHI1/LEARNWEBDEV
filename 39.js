let count=0;
function increasecount()
{
  count+=1;
  document.getElementById("mylabel").innerHTML=count;
}
function decreasecount()
{
  count-=1;
  document.getElementById("mylabel").innerHTML=count;
}