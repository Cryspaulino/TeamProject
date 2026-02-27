document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = "";

    if (!username || !password) {
        errorMessage.textContent = "Please enter both username and password.";
        return;
    }

    // Placeholder for Firebase authentication
    console.log("Username:", username);
    console.log("Password:", password);

    // Example success handling
    alert("Login submitted (connect Firebase here)");
});
