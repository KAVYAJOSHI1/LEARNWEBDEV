const timedisplay=document.getElementById("timedisplay");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");

let starttime=0;
let elapsedtime=0;
let currenttime=0;
let stoptime=true;
let intervalid;
let hrs=0;
let min=0;
let secs=0;


start.addEventListener("click",()=>{
    if(stop){
        stoptime=false;
        starttime=Date.now()-elapsedtime;
        intervalid= setInterval(updatetime,75);
    }
    
});
stop.addEventListener("click",()=>{
    if(!stoptime){
        stoptime=true;
        elapsedtime=Date.now()-starttime;
        clearInterval(intervalid);
    }
});
reset.addEventListener("click",()=>{
    stoptime=true;
    clearInterval(intervalid);
    elapsedtime=0;
    starttime=0;
    hrs=0;
    min=0;
    secs=0;
    timedisplay.innerHTML="00:00:00";
});


function updatetime()
{
elapsedtime=Date.now()-starttime;
secs=Math.floor((elapsedtime/1000)%60);
min=Math.floor((elapsedtime/(1000*60))%60);
hrs=Math.floor((elapsedtime/(1000*60*60))%60);
timedisplay.innerHTML=hrs+":"+min+":"+secs;
secs=pad(secs);
min=pad(min);
hrs=pad(hrs);
}

function pad(unit){
    return(("0")+unit).length>2?unit:("0"+unit);
}
