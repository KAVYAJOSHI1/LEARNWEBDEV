document.getElementById("mybutton").onclick =function(){
    const check=document.getElementById("mycheckbox");
    const visabtn=document.getElementById("visabtn");
    const mastercardbtn=document.getElementById("mastercardbtn");
    const paypalbtn=document.getElementById("paypalbtn")
    if(check.checked )
        {

        console.log("SUBSCRIBED");
        if (visabtn.checked)
            {
                console.log("YOU ARE PAYING WITH VISA");
            }
           else if (mastercardbtn.checked)
            {
                console.log("YOU ARE PAYING WITH  MASTERCARD");
            }
           else  if (paypalbtn.checked)
            {
                console.log("YOU ARE PAYING WITH PAYPAL");
            }
            else
            {
                console.log("PLEASE SELECT PAYMENT METHOD");
            }
    }
    else
    {

        console.log("NOT SUBSCRIBED");
    }
   
}