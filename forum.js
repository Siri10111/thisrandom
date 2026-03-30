// Forum filtering functionality

const filterBtns = document.querySelectorAll('.filter-btn');
const threads = document.querySelectorAll('.forum-thread');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter threads
        threads.forEach(thread => {
            if (category === 'all' || thread.dataset.category === category) {
                thread.style.display = 'block';
            } else {
                thread.style.display = 'none';
            }
        });
    });
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}
