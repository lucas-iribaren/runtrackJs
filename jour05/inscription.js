document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation du champ nom
    if (nom.trim().length < 2) {
        document.getElementById('nomError').textContent = 'Le nom doit avoir au moins 2 caractères.';
        return;
    } else {
        document.getElementById('nomError').textContent = '';
    }

    // Validation du champ prénom
    if (prenom.trim().length < 2) {
        document.getElementById('prenomError').textContent = 'Le prénom doit avoir au moins 2 caractères.';
        return;
    } else {
        document.getElementById('prenomError').textContent = '';
    }

    // Validation du champ email
    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Veuillez saisir une adresse email valide.';
        return;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validation du champ mot de passe
    if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 8 caractères, dont au moins 1 lettre, 1 chiffre et 1 caractère spécial.';
        return;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Validation du champ de confirmation de mot de passe
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Les mots de passe ne correspondent pas.';
        return;
    } else {
        document.getElementById('confirmPasswordError').textContent = '';
    }

    // Envoyer le formulaire si tout est valide
    this.submit();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
}
