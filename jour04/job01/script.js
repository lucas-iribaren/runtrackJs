document.getElementById("button").addEventListener("click", function() {
    fetch("expression.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur de chargement du fichier");
            }
            return response.text();
        })
        .then(data => {
            var paragraph = document.createElement("p");
            paragraph.textContent = data;
            document.body.appendChild(paragraph);
        })
        .catch(error => {
            console.error("Erreur : ", error);
        });
});
