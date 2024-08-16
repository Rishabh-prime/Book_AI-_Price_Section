document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        this.textContent = '🌙 Dark Mode';
    } else {
        this.textContent = '☀️ Light Mode';
    }
});

