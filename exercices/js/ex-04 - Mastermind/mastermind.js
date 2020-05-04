  /* --------- VARIABLES --------- */

   const choicePC = arrayOfColorsPC();
   const pawnsPcDisplay = [...document.querySelectorAll('.colors-pc .pion')];
   const pawnsColorPalette = [...document.querySelectorAll('.choose-color .choice-pawn-player')];
   const playerAttemptAreas = [...document.querySelectorAll('.container-player-attempt')].reverse();
   // const pawnEmptyAreas = [...document.querySelectorAll('.container-player-attempt .pion')];
   const hintContainers = [...document.querySelectorAll('.container-hint')].reverse();
   const hintResults = [...document.querySelectorAll('.container-hint hint')];
   currentContainerHint = document.querySelector('.container-hint:not(.hidden):last-child');
   const currentContainerTarget = document.querySelector('.container-player-attempt:not(.hidden):last-child');
   // const nextContainerTarget = document.querySelector('.container-player-attempt:not(.hidden):last-child');
   const pawnsTarget = [...document.querySelectorAll('.container-player-attempt:not(.hidden):last-child .pion')];
   const returnButton = document.querySelector('.pion.return');
   const choicePlayer = [];
   let index = 0;
   // let attempts = 10;

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
         let pawnCurrentClasses = [...target.classList];
         if(pawnCurrentClasses.length === 1) {
            target.classList.add(color);
            arr.push(color);
         } else { 
            return false;
         }
      }   
   }

   // Ajoute les pistes 

   function addHintsToScreen() {

   }

   // Affiche une nouvelle tentative

   function newAreaAttempt(current, next) {
      current.classList.add('no-interact');   
      next.classList.remove("hidden");
   }

   // reset
   function reset(playerAreas, hints) {

      playerAreas.map((area) => {

         if(playerAreas.indexOf(area) !== 0) {
            area.classList.add("hidden");
         }
      });

      hints.map((container) => {

         if(hints.indexOf(container) !== 0) {
            container.classList.add("hidden");
         }
      });
   }


   /* --------- START --------- */

   reset(playerAttemptAreas, hintContainers);

   // Affiche le resultat de l'ordi
   for(let i = 0; i < pawnsPcDisplay.length; i++) {
      pawnsPcDisplay[i].classList.add(choicePC[i]);
   }

   /* --------- INTERACTIONS --------- */

   // if(choicePlayer.length === 4) {
   //    alert('ok');        
   // }
   
   pawnsColorPalette.forEach((pawn) => {
      pawn.addEventListener('click', function(){
         do {
            addColorOnScreen(choicePlayer, pawn.dataset.color, pawnsTarget[index]);
            index++;
         } while (index < choicePlayer.length); 
      })
   })

   





   // returnButton.addEventListener('click', function() {

   // })


   /* --------- ESSAIS --------- */

   
   
   
   
   
   /* --------- DEBUG ZONE --------- */

   // console.log(playerAttemptAreas);
   // pawnsContainerTarget.forEach((test) => test.classList.add("green"));
   // console.log(pawnsContainerTarget); 
   // console.log(returnButton);
   // console.log(choicePC)
   // console.log(choicePlayer);


