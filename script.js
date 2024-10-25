function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.getElementById('hamburger');
    
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        hamburger.innerHTML = '&#9776;';  // Powrót do ikony hamburgera
    } else {
        menu.style.display = 'flex';
        hamburger.innerHTML = '&#10005;';  // Ikona "X" zamiast hamburgera
    }
}
