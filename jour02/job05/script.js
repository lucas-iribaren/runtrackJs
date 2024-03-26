window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    const footer = document.getElementById('footer');
    
    // Modifie la couleur du footer en fonction du pourcentage de défilement
    if (scrollPercentage <= 25) {
        footer.style.backgroundColor = '#f00'; // Noir
    } else if (scrollPercentage <= 50) {
        footer.style.backgroundColor = '#0f0'; // Gris foncé
    } else if (scrollPercentage <= 75) {
        footer.style.backgroundColor = '#00f'; // Gris moyen
    } else {
        footer.style.backgroundColor = '#fff'; // Gris clair
    }
});