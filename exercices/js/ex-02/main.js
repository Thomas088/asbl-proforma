const submit = document.querySelector(".submit");
const resultat = document.querySelector(".resultat");
let value;

const rendu = montant => {
  if (montant < 1 || isNaN(montant)) {

    resultat.innerHTML = "Erreur : veuillez entrer un montant";

  } else {

    let reminder,
        billetDe500,
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
        piecesDe5;

    reminder;
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

    

    // piecesDe50cent = Math.floor(reminder / 0.5);
    // reminder = reminder - piecesDe50cents * 0.5;

    // piecesDe20cent = Math.floor(reminder / 0.2);
    // reminder = reminder - piecesDe50cents * 0.2;

    // piecesDe10cent = Math.floor(reminder / 0.5);
    // reminder = reminder - piecesDe50cents * 0.5;



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
                     
                       
                       `;
  }
};

submit.addEventListener("click", () => {
  let value = Number(document.querySelector(".input").value);
  let result = rendu(value);
  resultat.innerHTML = result;
});
