function game() {

   const colors = ["green", "blue", "purple", "gold", "brown", "mauve", "pink"];
   const choicePlayer = [];
   let attempts = 10;

   // Genere une couleurs

   function randomChoiceColor()  {
      return colors[Math.round(Math.random() * Math.round(colors.length - 1))];
   }

   // Genere un tableau de couleurs unique pour l'ordi
   
   function arrayOfColorsPC() {

      let array = [];
      let i = 0;

      do {
         let value = randomChoiceColor()  
         // Verifie les doublons
         if(array.indexOf(value) === -1) { 
            array.push(value);
         } else { 
         // Si la valeur existe, revient en arrière d'un index.
            i-=1;
         }
        i++;   
      } while(i < 4);
      return array;
   }

  const choicePC = arrayOfColorsPC();
  console.log(choicePC);

}

window.addEventListener('DOMContentLoaded', game)