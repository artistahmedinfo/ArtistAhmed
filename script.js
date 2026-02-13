const accessCode = "secret123"; // Change kor apnar jonno—members ke ei code din

function checkAccess() {
    const input = document.getElementById("access-code").value;
    if (input === accessCode) {
        // Login successful—videos page e redirect
        window.location.href = "videos.html";
    } else {
        alert("Incorrect access code! Please contact support.");
    }
}

function logout() {
    // Logout—home page e redirect
    window.location.href = "index.html";
}

function openModal(videoId, title) {
    // Featured player e video load kor (YouTube embed)
    const player = document.getElementById('featured-player');
    if (player) {
        player.src = `https://www.youtube.com/embed/${videoId}`;
        player.play();
        // Optional: Scroll to top
        window.scrollTo(0, 0);
    }
}

// Optional: Agar modal chai (videos.html e add kor)
function closeModal() {
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('modal-video').src = '';
    }
}

// Modal outside click to close (agar modal use koren)
window.onclick = function(event) {
    const modal = document.getElementById('video-modal');
    if (modal && event.target === modal) {
        closeModal();
    }
};

// Global functions (HTML theke call korar jonno)
window.checkAccess = checkAccess;
window.logout = logout;
window.openModal = openModal;
window.closeModal = closeModal;
