// Liste des pages à naviguer, y compris les images
const pages = [
    "index.html", // page d'accueil
    "seconde.html", // seconde page
    "H_clc1.html", // image 1
    "H_clc2.html", // image 2
    "H_clc3.html", // image 3
    "H_clc4.html",  // image 4
    "end.html"
];

// Détecte la page actuelle ou l'image
const currentPage = window.location.pathname.split("/").pop();
let currentIndex = pages.indexOf(currentPage);

// Si la page actuelle n'est pas trouvée, on vérifie s'il s'agit d'une image
if (currentIndex === -1) {
    if (currentPage.endsWith(".jpg") || currentPage.endsWith(".png") || currentPage.endsWith(".jpeg")) {
        // Trouver l'index correct pour l'image
        currentIndex = pages.findIndex(page => page.endsWith(currentPage));
    }
}

// Fonction pour gérer la transition entre les pages et images
function navigatePage(direction) {
    const overlay = document.querySelector(".fade-overlay");

    // Affiche l'overlay de transition
    overlay.style.opacity = "1";
    setTimeout(() => {
        if (direction === "next") {
            if (currentIndex < pages.length - 1) {
                currentIndex++; // Incrémente l'index pour la page suivante
                window.location.href = pages[currentIndex]; // Redirige vers la page suivante
            }
        } else if (direction === "previous") {
            if (currentIndex > 0) {
                currentIndex--; // Décrémenter l'index pour revenir à la page précédente
                window.location.href = pages[currentIndex]; // Redirige vers la page précédente
            }
        }
    }, 1000); // Attente de 1 seconde pour l'effet de transition
}

// Gestion de la navigation avec les touches fléchées
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        navigatePage("next");
    } else if (event.key === "ArrowLeft") {
        navigatePage("previous");
    }
});
