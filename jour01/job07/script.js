function jourTravaille(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth(); 
    const jour = date.getDate();

    // Liste des mois
    const nomsMois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    // Liste jours fériés
    const joursFeries = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Fête du Travail
        "2024-05-08", // Victoire 1945
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    const jourActuel = date.getDay(); // Dimanche - Samedi : 0 - 6

    const dateString = date.toISOString().slice(0, 10);
    const nomMois = nomsMois[mois]; // Récupère le nom du mois à partir du tableau

    if (joursFeries.includes(dateString)) {
        console.log(`Le ${jour} ${nomMois} ${annee} est un jour férié.`);
    } else if (jourActuel === 0 || jourActuel === 6) {
        console.log(`Non, le ${jour} ${nomMois} ${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour} ${nomMois} ${annee} est un jour travaillé.`);
    }
}

const dateTest = new Date("2024-05-01"); // Date de la Fête du Travail en 2024
jourTravaille(dateTest);
