document.getElementById('connexionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validation du champ email
    if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Veuillez saisir une adresse email valide.';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }


    // Envoyer le formulaire si tout est valide
    this.submit();
});

function isValidEmail(email) {
    // Utilisez une expression régulière pour valider l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
