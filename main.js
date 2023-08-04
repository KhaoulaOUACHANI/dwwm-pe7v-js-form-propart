// Récupérer les éléments du DOM après chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    const civilianForm = document.getElementById("civilian_form");
    const profesionalForm = document.getElementById("profesional_form");
    const civilianRadio = document.getElementById("civilian");
    const profesionalRadio = document.getElementById("profesional");

    // Fonction pour cacher tous les formulaires sauf celui spécifié
    function cacherFormulairesSauf(form) {
        civilianForm.classList.add("disappear");
        profesionalForm.classList.add("disappear");
        form.classList.remove("disappear");
    }

    // Écouter le changement du bouton radio pour afficher le formulaire correspondant
    civilianRadio.addEventListener("change", function () {
        cacherFormulairesSauf(civilianForm);
    });

    profesionalRadio.addEventListener("change", function () {
        cacherFormulairesSauf(profesionalForm);
    });
});
