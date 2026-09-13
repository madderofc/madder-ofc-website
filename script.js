// Static Anime Background
const bgContainer = document.getElementById('background-container');
const bgMusic = document.getElementById('bgMusic');

// Update clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Initialize
window.addEventListener('load', () => {
    // Update clock every second
    updateClock();
    setInterval(updateClock, 1000);
    
    // Play music on user interaction
    document.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(err => console.log('Audio play error:', err));
        }
    });
});

// Page Navigation
function goToPage(page) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    let content = '';
    
    switch(page) {
        case 'youtube':
            content = `
                <h2><i class="fab fa-youtube"></i> YOUTUBER CHANNELS</h2>
                <a href="https://www.youtube.com/@OpMmadhav" target="_blank" class="channel-link">@OpMmadhav</a>
                <a href="https://www.youtube.com/@NxtM70" target="_blank" class="channel-link">@NxtM70</a>
            `;
            break;
        
        case 'telegram':
            content = `
                <h2><i class="fab fa-telegram"></i> TELEGRAM</h2>
                <a href="https://t.me/OpMmadhav" target="_blank" class="channel-link">DM - @OpMmadhav</a>
                <p class="channel-desc">CHANNEL coming soon</p>
            `;
            break;
        
        case 'discord':
            content = `
                <h2><i class="fab fa-discord"></i> DISCORD</h2>
                <p style="font-size: 1.5rem; margin-top: 30px;">Coming Soon</p>
                <p class="channel-desc">Stay tuned for Discord server link!</p>
            `;
            break;
        
        case 'instagram':
            content = `
                <h2><i class="fab fa-instagram"></i> INSTAGRAM</h2>
                <p style="font-size: 1.5rem; margin-top: 30px;">Coming Soon</p>
                <p class="channel-desc">Follow us soon on Instagram!</p>
            `;
            break;
        
        case 'modz':
            content = `
                <h2><i class="fas fa-download"></i> MODZ DOWNLOAD</h2>
                <p style="font-size: 1.5rem; margin-top: 30px;">Coming Soon</p>
                <p class="channel-desc">Premium mods will be available soon!</p>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Go to Key Page
function goToKeyPage() {
    const keyPage = document.getElementById('keyPage');
    keyPage.style.display = 'flex';
}

// Close Key Page
function closeKeyPage() {
    const keyPage = document.getElementById('keyPage');
    keyPage.style.display = 'none';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Reload functionality
function reloadPage() {
    location.reload();
}