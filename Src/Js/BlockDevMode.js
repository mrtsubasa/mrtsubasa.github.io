// Bloquer l'accès aux DevTools
document.addEventListener('keydown', function(e) {
    // Bloquer F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Bloquer Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.keyCode === 73)) {
        e.preventDefault();
        return false;
    }
    
    // Bloquer Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
        e.preventDefault();
        return false;
    }
    
    // Bloquer Ctrl+U (voir source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }
});

// Désactiver le clic droit
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Message d'avertissement dans la console
console.log('%cAttention!', 'color: red; font-size: 30px; font-weight: bold;');
console.log('%cCe site est protégé contre l\'utilisation des outils de développement.', 'font-size: 20px;');