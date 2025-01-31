document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe active ao link atual
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    
    menuItems.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });
}); 