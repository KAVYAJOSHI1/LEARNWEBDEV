// Correct IDs in the JavaScript
let username = document.getElementById("name");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit");

// Add event listener to the submit button
submitButton.addEventListener("click", function() {
    if (username.value === "kavya" && password.value === "kavya123") {
        alert("Login successful");
        window.location.href = 'game.html';
    } else {
        alert("Login failed");
    }
});
