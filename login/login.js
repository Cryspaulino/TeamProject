function getLogin() {
    const form = document.getElementById("loginForm");
    const registerBtn = document.getElementById("register");

    const errorMessage = document.getElementById("error-message");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        message.textContent = "";

        if (!username || !password) {
            errorMessage.textContent = "Please enter both username and password.";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(user =>
            user.username === username && user.password === password
        );

        if (!foundUser) {
            errorMessage.style.color = "red";
            errorMessage.textContent = "Invalid username or password.";
            return;
        }

        message.style.color = "green";
        message.textContent = `Welcome, ${username}! You are logged in.`;

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", username);

        updateLoginStatus();

        setTimeout(() => {
            window.location.href = "./index.html";
        }, 1500);
    });

    registerBtn.addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        message.textContent = "";

        if (!username || !password) {
            errorMessage.textContent = "Please enter both username and password.";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.some(user => user.username === username);

        if (exists) {
            errorMessage.style.color = "red";
            errorMessage.textContent = "This username already exists.";
            return;
        }

        users.push({
            username,
            password,
            watchlist: []
        });

        localStorage.setItem("users", JSON.stringify(users));

        message.style.color = "green";
        message.textContent = "Your account was created! You can log in.";
    });
}

// function updateLoginStatus() {
//     const loggedIn = localStorage.getItem("loggedIn");
//     const currentUser = localStorage.getItem("currentUser");
//     const statusEl = document.getElementById("login-status");

//     if (!statusEl) return;

//     if (loggedIn === "true" && currentUser) {
//         statusEl.textContent =
//             `Welcome ${currentUser}! Enjoy your time using our Movie Decider`;
//     } else {
//         statusEl.textContent = "";
//     }
// }

getLogin();