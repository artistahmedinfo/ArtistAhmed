const accessCode = "secret123"; // Change kor apnar jonno

function showLogin() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("login-section").style.display = "flex";
}

function checkAccess() {
    const input = document.getElementById("access-code").value;
    if (input === accessCode) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("course-section").style.display = "block";
        localStorage.setItem("loggedIn", "true");
    } else {
        alert("Incorrect access code!");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    document.getElementById("course-section").style.display = "none";
    document.getElementById("home-section").style.display = "flex";
}

window.onload = function() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("home-section").style.display = "none";
        document.getElementById("login-section").style.display = "none";
        document.getElementById("course-section").style.display = "block";
    }
};

// Global functions
window.showLogin = showLogin;
window.checkAccess = checkAccess;
window.logout = logout;
