const mylabel=document.getElementById("mylabel");
update();
setInterval(update,1000);
function update(){
    let date=new Date();
    mylabel.innerHTML=formattime(date);

    function formattime(date){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let ampm=hours>=12?"PM":"AM";
        hours=hours%12||12;
        hours=formatzeros(hours);
        minutes=formatzeros(minutes);
        seconds=formatzeros(seconds);
        return `${hours}:${minutes}:${seconds}:${ampm}`;
    }
    function formatzeros(time){
        time=time.toString();
        return time.length<2?`0${time}`:time;
    }
}