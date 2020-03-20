window.addEventListener("DOMContentLoaded", function() {

    const entry = document.querySelector(".user-input").value;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");
    const result = document.querySelectorAll(".result")
    const tableauResult = [];

    submit.addEventListener("click", () => {

        alert(entry);

    })

    restart.addEventListener("click", () => {

        alert("salut");

    })

})