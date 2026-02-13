const accessCode = "secret123"; // Change this to your actual access code for members

// Check if user is logged in (for videos.html)
function checkLogin() {
    if (!sessionStorage.getItem('loggedIn')) {
        alert('Please log in to access this page.');
        window.location.href = 'login.html';
    }
}

// Login function
function checkAccess() {
    const input = document.getElementById("access-code").value.trim();
    if (!input) {
        alert("Please enter an access code.");
        return;
    }
    if (input === accessCode) {
        sessionStorage.setItem('loggedIn', 'true'); // Set login flag
        window.location.href = "videos.html";
    } else {
        alert("
