window.addEventListener("DOMContentLoaded", function() {

    const entry = document.querySelector(".user-input").value;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");
    const result = document.querySelectorAll(".total-entries-result")
    const tableauResult = [];

    submit.addEventListener("click", () => {

        alert(entry);

    })

    restart.addEventListener("click", () => {

        result.innerHTML = 0;

    })

})