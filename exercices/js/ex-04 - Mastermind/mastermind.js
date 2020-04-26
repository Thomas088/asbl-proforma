function game() {

   /* --------- LIST OF FUNCTIONS --------- */
   
   // Genere une couleur
   function randomChoiceColor()  {

      const colors = ["green", "blue", "purple", "gold", "brown", "mauve", "pink"];
      return colors[Math.round(Math.random() * Math.round(colors.length - 1))];
   }


    // Genere un tableau de couleurs unique pour l'ordi
    function arrayOfColorsPC() {

      let array = [];
      let i = 0;

         do {
            let color = randomChoiceColor()  
            // Verifie les doublons
            if(array.indexOf(color) === -1) { 
               array.push(color);
            } else { 
            // Si la valeur existe, revient en arrière d'un index.
               i-=1;
            }
         i++;   
         } while(i < 4);

      return array;
   }

   //  Ajoute le choix utilisateur dans la zone de tentative
   function addColorOnScreen(arr, color, target) {

      if(arr.length === 4) {
         return false; 
      } else {
         target.classList.add(color)
         return arr.push(color);
      }   
   }

   /* --------- VARIABLES --------- */

   const choicePC = arrayOfColorsPC();
   const pawnsPcDisplay = [...document.querySelectorAll('.colors-pc .pion')];
   const pawnsColorPalette = [...document.querySelectorAll('.choose-color .choice-pawn-player')];
   const playerAttemptAreas = [...document.querySelectorAll('.container-player-attempt')];
   const pawnArea;
   const choicePlayer = [];
   // let attempts = 10;

  // Affiche le resultat de l'ordi
   for(let i = 0; i < pawnsPcDisplay.length; i++) {
      pawnsPcDisplay[i].classList.add(choicePC[i]);
   }

   
   pawnsColorPalette.forEach((pawn) => {
      pawn.addEventListener('click', function(){
            addColorOnScreen(choicePlayer, pawn.dataset.color); 
            console.log(choicePlayer); 
      })
   })

   // DEBUG ZONE

  console.log(choicePlayer); 
  console.log(choicePC);
  console.log(pawnsPC);

}

window.addEventListener('DOMContentLoaded', game)