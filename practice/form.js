document.getElementById("submitbutton").onclick = function() {
    var username = document.getElementById("username").value;
    var rollno=document.getElementById("rollnumber").value;
    if(username=="" && rollno=="")
    {
        window.alert("FILL THE DETAILS");
    }
    else
    
    window.alert("HELLO " + username + " WITH ROLL NUMBER " + rollno);
}
