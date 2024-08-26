let area;
let l;
let b;

l=window.prompt("ENTER LENGTH");
l=Number(l);
b=window.prompt("ENTER BREADTH");
b=Number(b);
area=getarea(l,b);
console.log("The area is",area);
function getarea(l,b)
{
    return l*b;
}

