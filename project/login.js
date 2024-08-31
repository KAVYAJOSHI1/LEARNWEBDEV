document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "kavya" && password === "kavya123") {
        window.location.href = "slectionpage.html"; // Adjust the path based on your structure
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
