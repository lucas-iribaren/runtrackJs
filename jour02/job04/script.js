document.addEventListener('keydown', function(event) {
  // Vérifie si la touche pressée est une lettre de a à z
  if (event.key.match(/^[a-z]$/i)) {
      var textarea = document.getElementById('keylogger');
      // Vérifie si le focus est sur le textarea
      if (document.activeElement === textarea) {
          // Ajoute la lettre une deuxième fois si le focus est sur le textarea
          textarea.value += event.key ;
      } else {
          // Ajoute la lettre une fois si le focus n'est pas sur le textarea
          textarea.value += event.key;
      }
  }
});