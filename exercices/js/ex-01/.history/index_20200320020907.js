window.addEventListener("DOMContentLoaded", function () {

    const entry = document.querySelector(".user-entry").nodeValue;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");

    if (typeof entry !== "number") {
        alert("Erreur : entrer un entier.")
    }

    submit.addEventListener("click", () => {
        
        alert(entry);

    })

})