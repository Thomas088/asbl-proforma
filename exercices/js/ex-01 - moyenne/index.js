window.addEventListener("DOMContentLoaded", () => {

    // INTERFACE 
    let entry;
    let total;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");
    const entries = document.querySelector(".entries");
    const results = entries.querySelectorAll(".result");
    const totalEntriesResult = document.querySelector(".total-entries-result");
    const sumEntriesResult = document.querySelector(".sum-entries-result");
    const maxEntriesResult = document.querySelector(".max-entries-result");
    const minEntriesResult = document.querySelector(".min-entries-result");
    const averageEntriesResult = document.querySelector(".average-entries-result");
    const listOfEntriesResult = document.querySelector(".list-of-entries-result");
    const sequenceEntriesResult = document.querySelector(".sequence-entries-result");
    const tableauResult = [];

    const longest = [];
    let tempArr = [];
    let lastSequence = [];
    let cloneTab = [];


    // MISE A ZERO
    Array.from(results).forEach((result) => result.innerHTML = 0);

    // LONGEST INCREASING SEQUENCE 
    const longestSequence = number => {

        if(tableauResult.length === 1) {
            return tableauResult;
        } else {

        }

        if (lastSequence.length > longest.length) {
            longest = lastSequence;
        }
        return longest
      };
    
    // CLICK ON 'SOUMETTRE'
    submit.addEventListener("click", () => {

        entry = Number(document.querySelector(".user-input").value);

        if(!isNaN(entry)) {
            tableauResult.push(entry); 
            totalEntriesResult.innerHTML = tableauResult.length;
            total = tableauResult.reduce((total, entree) => total + entree, 0);
            sumEntriesResult.innerHTML = total;
            maxEntriesResult.innerHTML = Math.max(...tableauResult);
            minEntriesResult.innerHTML = Math.min(...tableauResult);
            averageEntriesResult.innerHTML = Number((total / tableauResult.length).toFixed(2));
            listOfEntriesResult.innerHTML = tableauResult.join(", ");
            sequenceEntriesResult.innerHTML = longestSequence(entry);
        } else {
            alert("Erreur : Inserer un nombre entier");
        }

    }); 


    // RESET
    restart.addEventListener("click", () => {
        tableauResult.length = 0;
        tempArr.length = 0;
        Array.from(results).forEach((result) => result.innerHTML = '0');
    });

});