// Anime Background URLs (Royalty-free anime images)
const animeBackgrounds = [
    'https://images.unsplash.com/photo-1578482218881-bd674a39f5a6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1542155537-c1c1fe0e0e6f?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
];

let currentBgIndex = 0;
const bgContainer = document.getElementById('background-container');
const bgMusic = document.getElementById('bgMusic');

// Change background every 8 seconds
function changeBackground() {
    currentBgIndex = (currentBgIndex + 1) % animeBackgrounds.length;
    bgContainer.style.backgroundImage = `url('${animeBackgrounds[currentBgIndex]}')`;
}

// Initialize
window.addEventListener('load', () => {
    bgContainer.style.backgroundImage = `url('${animeBackgrounds[0]}')`;
    setInterval(changeBackground, 8000);
    
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
                <h2>📺 YOUTUBER CHANNELS</h2>
                <a href="https://www.youtube.com/@OpMmadhav" target="_blank" class="channel-link">@OpMmadhav</a>
                <a href="https://www.youtube.com/@NxtM70" target="_blank" class="channel-link">@NxtM70</a>
            `;
            break;
        
        case 'telegram':
            content = `
                <h2>💬 TELEGRAM</h2>
                <a href="https://t.me/OpMmadhav" target="_blank" class="channel-link">DM - @OpMmadhav</a>
                <p class="channel-desc">CHANNEL coming soon</p>
            `;
            break;
        
        case 'discord':
            content = `
                <h2>🎮 DISCORD</h2>
                <p style="font-size: 1.5rem; margin-top: 30px;">Coming Soon</p>
                <p class="channel-desc">Stay tuned for Discord server link!</p>
            `;
            break;
        
        case 'instagram':
            content = `
                <h2>📸 INSTAGRAM</h2>
                <p style="font-size: 1.5rem; margin-top: 30px;">Coming Soon</p>
                <p class="channel-desc">Follow us soon on Instagram!</p>
            `;
            break;
        
        case 'freekey':
            content = `
                <h2>🔑 GET FREE KEY</h2>
                <a href="https://vplink.in/Vdax" target="_blank" class="channel-link">GET YOUR FREE KEY NOW</a>
                <p class="channel-desc">Click above to claim your free key</p>
            `;
            break;
        
        case 'modz':
            content = `
                <h2>⬇️ MODZ DOWNLOAD</h2>
                <p style="font-size: 1.5rem; margin-top: 30px;">Coming Soon</p>
                <p class="channel-desc">Premium mods will be available soon!</p>
            `;
            break;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
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

// Handle page reload
window.addEventListener('beforeunload', (e) => {
    // Optional: Add confirmation if needed
});

// Reload functionality
function reloadPage() {
    location.reload();
}