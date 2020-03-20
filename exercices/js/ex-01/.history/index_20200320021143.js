window.addEventListener("DOMContentLoaded", function () {

    const entry = document.querySelector(".user-entry").value;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");

    submit.addEventListener("click", () => {

        if (typeof entry !== "number") {
            alert("Erreur : entrer un entier.");
        }
        
        alert(entry);

    })

})