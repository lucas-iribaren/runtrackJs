const body = document.body;

// Ajoute la classe CSS 'hidden' à l'élément racine
body.classList.add('hidden');


const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Fonction pour vérifier si la séquence Konami est entrée
function checkKonamiCode(event) {
    const key = event.key;

    // Vérifier si la touche appuyée correspond à la prochaine touche de la séquence Konami
    if (key === konamiSequence[konamiIndex]) {
        konamiIndex++;

        // Vérifier si la séquence Konami a été complétée
        if (konamiIndex === konamiSequence.length) {
            // Déverrouille le site Web
            body.classList.remove('hidden');
        }
    } else {
        // Réinitialiser l'index si la touche appuyée ne correspond pas à la séquence Konami
        konamiIndex = 0;
    }
}

document.addEventListener('keydown', checkKonamiCode);
