window.addEventListener("DOMContentLoaded", () => {

  const submit = document.querySelector(".submit");
  const resultat = document.querySelector(".resultat");
  let value;

  const rendu = montant => {

    // SI LE TYPE DU MONTANT EST DIFFERENT 
    if (isNaN(montant)) {
      return resultat.innerHTML = "Erreur : Entrer un montant valide";
    } else {

      // DECLARATION DES VARIABLES

      let billetDe500,
          billetDe200,
          billetDe100,
          billetDe50,
          billetDe20,
          billetDe10,
          billetDe5,
          piecesDe2,
          piecesDe1,
          piecesDe50,
          piecesDe20,
          piecesDe10,
          piecesDe05,
          piecesDe02,
          piecesDe01,
          reminder,
          cents;
          
      // ON DIVISE EN BILLET DE 500

      billetDe500 = Math.floor(montant / 500);

      // ON GARDE LE RESTE

      reminder = montant % 500;

      // LE RESTE EST UTILISE TOUT LE LONG DE LA SEQUENCE DESCENDANTE EN FONCTION DE LA MONNAIE 
      billetDe200 = Math.floor(reminder / 200);

      reminder = reminder - billetDe200 * 200;

      billetDe100 = Math.floor(reminder / 100);
      reminder = reminder - billetDe100 * 100;

      billetDe50 = Math.floor(reminder / 50);
      reminder = reminder - billetDe50 * 50;

      billetDe20 = Math.floor(reminder / 20);
      reminder = reminder - billetDe20 * 20;

      billetDe10 = Math.floor(reminder / 10);
      reminder = reminder - billetDe10 * 10;

      billetDe5 = Math.floor(reminder / 5);
      reminder = reminder - billetDe5 * 5;

      piecesDe2 = Math.floor(reminder / 2);
      reminder = reminder - piecesDe2 * 2;

      piecesDe1 = Math.floor(reminder / 1);
      reminder = reminder - piecesDe1 * 1;

      // ON MULTIPLIE LE REMINDER PAR 100 POUR AVOIR LES CENTIMES EN ENTIER
    
      cents = Math.round(reminder * 100);

      // ON REFAIT LA MEME OPERATION POUR LES CENTIMES

      piecesDe50 = Math.floor(cents / 50);
      cents = cents - piecesDe50 * 50;

      piecesDe20 = Math.floor(cents / 20);
      cents = cents - piecesDe20 * 20;

      piecesDe10 = Math.floor(cents / 10);
      cents = cents - piecesDe10 * 10;

      piecesDe05 = Math.floor(cents / 5);
      cents = cents - piecesDe05 * 5;

      piecesDe02 = Math.floor(cents / 2);
      cents = cents - piecesDe02 * 2;

      piecesDe01 = Math.floor(cents / 1);
      cents = cents - piecesDe01 * 1;

      return `Je vous dois <br>
                        <br>
                        ${billetDe500} billets de 500 euros,<br>
                        ${billetDe200} billets de 200 euros,<br>
                        ${billetDe100} billets de 100 euros,<br>
                        ${billetDe50} billets de 50 euros,<br>
                        ${billetDe20} billets de 20 euros,<br>
                        ${billetDe10} billets de 10 euros,<br>
                        ${billetDe5} billets de 5 euros,<br>
                        ${piecesDe2} pieces de 2 euros,<br>
                        ${piecesDe1} pieces de 1 euros<br> 
                        <br><br>
                        ET 
                        <br><br>
                        ${piecesDe50} pieces de 50 centimes<br>
                        ${piecesDe20} pieces de 20 centimes<br>
                        ${piecesDe10} pieces de 10 centimes<br>
                        ${piecesDe05} pieces de 5 centimes<br>
                        ${piecesDe02} pieces de 2 centimes<br>
                        ${piecesDe01} pieces de 1 centimes<br>`;
    }
  };

  submit.addEventListener("click", () => {
    value = Number(document.querySelector(".input").value);
    resultat.innerHTML = rendu(value);
  });
});