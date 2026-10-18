const formulaire = document.getElementById("formulaire");

if (formulaire) {
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();
        const nom = document.getElementById("nom").value;
        const message = document.getElementById("message").value;

        if (nom.trim() === "" || message.trim() === "") {
            alert("Veuillez remplir tous les champs du formulaire.");
        }
    });
}