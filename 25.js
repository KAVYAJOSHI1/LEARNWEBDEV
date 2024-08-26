
document.getElementById("submit").onclick=function(){
    {
        let temp;
        if(document.getElementById("cbutton").checked)
            {
              temp=document.getElementById("textbox").value;
              temp=Number(temp);
              temp=toCelsius(temp);
              document.getElementById("templabel").innerHTML=temp +"°C";//alt+0176
            }
            else if(document.getElementById("fbutton").checked)
            {
                temp=document.getElementById("textbox").value;
                temp=Number(temp);
                temp=toFahrenheit(temp);
                document.getElementById("templabel").innerHTML=temp;

            }
            else
            {
                document.getElementById("templabel").innerHTML="PLEASE SELECT UNIT";
            }

    }

}
function toCelsius(temp){
    return (5/9)*(temp-32);
}
function toFahrenheit(temp){
    return (9/5)*temp+32;
}