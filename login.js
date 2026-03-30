function getLogin() {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        errorMessage.textContent = "";

        if (!username || !password) {
            errorMessage.textContent = "Please enter both username and password.";
            return;
        }

        const storedInfo = JSON.parse(localStorage.getItem("user"));

        // filter through users. Adding users to storedInfo (as an array).
        // Sign up as a next step so we can have many users instead of just one. Find user in the array. 

        if (!storedInfo) {
            errorMessage.textContent = "No user found. Please sign up first.";
            return;
        }

        const message = document.getElementById("message");

        if (username === storedInfo.username && password === storedInfo.password) {
            message.style.color = "green";
            message.innerHTML = "Hi! You've been successfully logged in."

            localStorage.setItem("loggedIn", "true");
        }

        console.log("Username:", username);
        console.log("Password:", password);

    });
}

getLogin();
