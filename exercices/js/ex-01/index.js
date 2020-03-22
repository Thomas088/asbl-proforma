window.addEventListener("DOMContentLoaded", function() {

    let entry;
    let total;
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


    const longestSequence = (arr) => {

        let index = 0;
        let longest = [0];
        let lastValueInLongest;
        let lastIndexOfArr = arr.length - 1;
        
        do {
      
          lastValueInLongest = longest[longest.length - 1];
              
              if(arr[index] < arr[index+1]) {
                if(arr[index] > lastValueInLongest) {
                  longest.push(arr[index]);
                }
              }
          
              if(arr[index+1] < arr[index]) {
                if(arr[index] > lastValueInLongest) {
                  longest.push(arr[index]);
                } else {
                  longest = [0];
                }
              }
          
          index++;
        } while (index < test.length);
        longest.shift();
        return longest.join(", ");
      }

      
      
    submit.addEventListener("click", () => {

        entry = parseInt(document.querySelector(".user-input").value);
        tableauResult.push(entry);
        totalEntriesResult.innerHTML = tableauResult.length;
        total = tableauResult.reduce((acc, entree) => acc + entree, 0);
        sumEntriesResult.innerHTML = total;
        maxEntriesResult.innerHTML = Math.max.apply(null, tableauResult);
        minEntriesResult.innerHTML = Math.min.apply(null, tableauResult);
        averageEntriesResult.innerHTML = (total / tableauResult.length).toFixed(2);
        listOfEntriesResult.innerHTML = tableauResult.join(", ");
        sequenceEntriesResult.innerHTML = longestSequence(tableauResult);
    }); 

    restart.addEventListener("click", () => {

        tableauResult.length = 0;
        const tabResult = Array.from(entries.querySelectorAll(".result"));
        tabResult.forEach((elt) => elt.innerHTML = "");

    });

});