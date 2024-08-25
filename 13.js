document.getElementById("mybutton").onclick =function(){
    const check=document.getElementById("mycheckbox");
    if(check.checked )
        {

        console.log("SUBSCRIBED");

    }
    else
    {

        console.log("NOT SUBSCRIBED");
    }
}