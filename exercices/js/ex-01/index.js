window.addEventListener("DOMContentLoaded", () => {

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

    Array.from(results).forEach((result) => result.innerHTML = 0);

    const longestSequence = (arr) => {

      let index = 0;
      let arrTemp = [0];
      let lastValueInArrTemp;
    
      if (arr.length === 1) {
        return arr.join("");
      } 

      do {
  
        lastValueInArrTemp = arrTemp[arrTemp.length - 1];
        
        if(arr[index] < arr[index+1]) {
          if(arr[index] > lastValueInArrTemp) {
            arrTemp.push(arr[index]);
          }
        }
    
        if(arr[index+1] < arr[index]) {
          if(arr[index] > lastValueInArrTemp) {
            arrTemp.push(arr[index]);
          } else if (arr[index-1] < lastValueInArrTemp) {
              arrTemp = arrTemp;                    
          } else {
            arrTemp = [0];
          }
        }

        index++;
      } while(index < arr.length);
      arrTemp.shift();
      return arrTemp.join(", ");
    }
      
    submit.addEventListener("click", () => {

        entry = parseInt(document.querySelector(".user-input").value);

        if(!isNaN(entry)) {
          tableauResult.push(entry);
          totalEntriesResult.innerHTML = tableauResult.length;
          total = tableauResult.reduce((acc, entree) => acc + entree, 0);
          sumEntriesResult.innerHTML = total;
          maxEntriesResult.innerHTML = Math.max.apply(null, tableauResult);
          minEntriesResult.innerHTML = Math.min.apply(null, tableauResult);
          averageEntriesResult.innerHTML = (total / tableauResult.length).toFixed(2);
          listOfEntriesResult.innerHTML = tableauResult.join(", ");
          sequenceEntriesResult.innerHTML = longestSequence(tableauResult);
        } else {
          alert("Erreur : Inserer un nombre entier")
        }

    }); 

    restart.addEventListener("click", () => {
        tableauResult.length = 0;
        Array.from(results).forEach((result) => result.innerHTML = 0);
    });

});