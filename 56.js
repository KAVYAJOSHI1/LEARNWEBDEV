//setinterval TO DISPLAY NUMBERS UPTILL THE INPUT BY USER 


let i=0;
let n=window.prompt("ENTER A NUMBER");
n=Number(n);
const timer=setInterval(count,1000);
function count()
{
    i+=1;
    console.log(i);
    if(i>=n)
    {
        clearInterval(timer);
    }

}
