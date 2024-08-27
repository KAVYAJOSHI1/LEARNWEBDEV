/*date
let date=new Date();
//let date=new Date(2023,0,1,2,3,4,5);
let year=date.getFullYear();
console.log(year);
date=date.toLocaleString();
document.getElementById("label").innerHTML=year;

//funciton to format date*/

document.getElementById("label").innerHTML=formattime(new Date());
function formatdate(date)
{
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDate();
    return `${day}-${month}-${year}`
}
function formattime(date)
{
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    return `${hours}:${minutes}:${seconds}`
}
