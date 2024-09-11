const name = document.querySelector("#name");
const email = document.querySelector("#email");
const text = document.querySelector("#text");
const submit = document.querySelector("input[type=submit]");
const divPopup = document.querySelector(".divPopup");
const message = document.querySelector(".message");

message.style.display = "none";
message.textContent = "Message envoyé avec succès!";

function displayMessage() {
    message.style.display = "block";
}

divPopup.style.display = "none";

submit.addEventListener("click", (event) => {
    event.preventDefault();

    // Supposons que formData est un objet contenant les données du formulaire
    const formData = {
        name: name.value,
        email: email.value,
        text: text.value
    };

    // Fonction pour valider le formulaire
    function validateForm() {
        if (formData.name === "" || formData.email === "" || formData.text === "") {
            alert("Veuillez remplir tous les champs!");
            return false; // Retourne false si la validation échoue
        }
        return true; // Retourne true si la validation réussit
    }

    // Appel de la fonction de validation
    if (validateForm()) {
        const popup = document.createElement('div');
        popup.className = "popup";
        popup.style.color = "white";

        // Ajoutez le popup au DOM, par exemple à un élément avec l'ID 'divPopup'
        divPopup.innerHTML = ''; // Effacez le contenu précédent
        divPopup.appendChild(popup);
        divPopup.style.display = "block"; // Affichez le divPopup
        message.style.display = "block";
    }
});
