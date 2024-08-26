let n=window.prompt("ENTER A NUMBER");
n=Number(n);
let m=window.prompt("ENTER A NUMBER");
m=Number(m);
for(let i=1;i<=n;i++)
{
    for(let j=1;j<=m;j++)
    {
        document.getElementById("myrectangle").innerHTML +=j;
       
    }
    document.getElementById("myrectangle").innerHTML += "<br>";
}