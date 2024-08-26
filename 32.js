//call back

sum(2,3,DOM);
function sum(x,y,callback)
{
    let z=x+y;
    callback(z); 
}
function display(output)
{
    console.log(output);
}
function DOM(output)
{
    document.getElementById("mylabel").innerHTML=output;
}