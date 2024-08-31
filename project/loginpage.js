document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "kavya" && password === "kavya123") {
        window.location.href = "selectionpage.html";
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
