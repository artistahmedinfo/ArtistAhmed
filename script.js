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
        alert("Incorrect access code! Please contact support.");
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('loggedIn'); // Clear login flag
    window.location.href = "index.html";
}

// Open video in featured player
function openModal(videoId, title) {
    const player = document.getElementById('featured-player');
    if (player) {
        player.src = `https://www.youtube.com/embed/${videoId}`;
        window.scrollTo(0, 0);
    }
}

// Expose functions globally
window.checkAccess = checkAccess;
window.logout = logout;
window.openModal = openModal;
window.checkLogin = checkLogin;
