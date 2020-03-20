window.addEventListener("DOMContentLoaded", function() {

    let entry;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");
    const entries = document.querySelector(".entries");
    const totalEntriesResult = document.querySelector(".total-entries-result");
    const sumEntriesResult = document.querySelector(".sum-entries-result");
    const maxEntriesResult = document.querySelector(".max-entries-result");
    const minEntriesResult = document.querySelector(".min-entries-result");
    const averageEntriesResult = document.querySelector(".average-entries-result");
    const listOfEntriesResult = document.querySelector(".list-of-entries-result");
    const sequenceEntriesResult = document.querySelector(".sequence-entries-result");
    const tableauResult = [];

    submit.addEventListener("click", () => {

        entry = parseInt(document.querySelector(".user-input").value);
        tableauResult.push(entry);
        totalEntriesResult.innerHTML = tableauResult.length;
        sumEntriesResult.innerHTML = tableauResult.reduce((acc, entree) => acc + entree, 0);
        maxEntriesResult.innerHTML = Math.max.apply(null, tableauResult);
        minEntriesResult.innerHTML = Math.min.apply(null, tableauResult);
        averageEntriesResult.innerHTML = (tableauResult.reduce((acc, entree) => acc + entree, 0) / tableauResult.length).toFixed(2);
        listOfEntriesResult.innerHTML = tableauResult.join(", ");

        

    }); 

    restart.addEventListener("click", () => {
        entry.innerHTML = 0;
        tableauResult.length = 0;
        const tabResult = Array.from(entries.querySelectorAll(".result"));
        tabResult.forEach((elt) => elt.innerHTML = "");   
    })

})