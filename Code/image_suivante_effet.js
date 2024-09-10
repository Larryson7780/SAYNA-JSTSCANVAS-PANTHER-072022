const fleche = document.querySelector(".image_suivante_effet");
const image1 = document.querySelector(".grandeImage img");
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

// Initialiser la première image
grandirImage(currentIndex);
