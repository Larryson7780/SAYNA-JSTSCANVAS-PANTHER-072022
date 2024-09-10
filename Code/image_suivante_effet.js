const fleche = document.querySelector(".image_suivante_effet");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const allImages = [image1, image2, image3];
let currentIndex = 0; // Index de l'image actuellement affichée

fleche.style.cursor = "pointer";

// Fonction pour grandir l'image actuelle
function grandirImage(index) {
    // Réinitialiser la taille de toutes les images
    allImages.forEach((img) => {
        img.style.transform = "scale(1)"; // Réinitialiser la taille
        img.style.transition = "transform 0.5s"; // Ajouter une transition
    });

    // Grandir l'image actuelle
    allImages[index].style.transform = "scale(1.5)"; // Agrandir l'image
}

// Écouter le clic sur la flèche
fleche.addEventListener("click", () => {
    // Passer à l'image suivante
    currentIndex = (currentIndex + 1) % allImages.length; // Boucle à travers les images
    grandirImage(currentIndex); // Appeler la fonction pour grandir l'image
});

// Écouter l'événement mouseenter pour appliquer l'effet de zoom
fleche.addEventListener("mouseenter", () => {
    grandirImage(currentIndex); // Agrandir l'image actuelle lorsque la souris est sur la flèche
});

// Écouter l'événement mouseleave pour réinitialiser l'effet de zoom
fleche.addEventListener("mouseleave", () => {
    allImages.forEach((img) => {
        img.style.transform = "scale(1)"; // Réinitialiser la taille lorsque la souris quitte la flèche
    });
});

// Initialiser la première image
grandirImage(currentIndex);
