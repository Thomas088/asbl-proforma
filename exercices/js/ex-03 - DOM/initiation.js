// Se vide lorsque l'on entre dedans

document.forms[0].ch1.addEventListener('focus', () => document.forms[0].ch1.value="");

// Se vide lorsque l'on entre dedans et qui remet la valeur initiale si le champ est vide lorsqu'on le quitte

document.forms[1].ch1.addEventListener('focus', () => document.forms[1].ch1.value="");

document.forms[1].ch1.addEventListener('blur', () => ((e) => e.ch1.value === "" ? e.ch1.value = "Texte initial" : 0)(document.forms[1]))

// La taille augmente lorsque l'on appuye sur une touche et qu'on est dedans

document.forms[2].ch1.value = "";

document.forms[2].ch1.addEventListener('keydown', () => document.forms[2].ch1.size++);

// Affiche les caractères quand la case est cochée, les masque sinon

document.forms[3].cb1.addEventListener('click', () => ((e) => e.ch1.type === "password" ? e.ch1.type = "text" : e.ch1.type = "password")(document.forms[3]));

// Affiche les caractères quand on maintient la souris enfoncé sur le carré, les masque sinon


document.forms[4].querySelector('.enfonce').addEventListener('mousedown', () => document.forms[4].ch1.type = "text");

document.forms[4].querySelector('.enfonce').addEventListener('mouseup', () => document.forms[4].ch1.type = "password");

// Jete le focus quand essaye de lui donner

document.forms[5].ch1.addEventListener('focus', () => document.forms[5].ch1.blur())

/* Jete le focus quand essaye de lui donner et que la case à cochée n'est pas activée.
Si le champ est rempli et que l'on décoche la case, on vide le champ.
Si on coche la case, on amène le focus dans le champ, et on place la valeur 0; */


document.forms[6].cb1.checked = false;
document.forms[6].ch1.value = "";

   (!document.forms[6].ch1.checked) ? document.forms[6].ch1.addEventListener('click', () => document.forms[6].ch1.blur()) : 0;

    document.forms[6].cb1.addEventListener('click', () => {
         
        ((e) => {
            if(e.cb1.checked) {
                e.ch1.focus();
                e.ch1.value = 0;
            } else {
                e.ch1.value = "";
                e.ch1.blur();
            }
        })(document.forms[6])            
})


// Un champ non modifiable qui s'incrémente ou se décrémente selon l'option sélectionnée

let entryForm7;
document.forms[7].ch1.setAttribute("readonly" , "");
document.forms[7].ch1.value = 0;
document.forms[7].b1.addEventListener('click', () => {

    entryForm7 = Number(document.forms[7].ch1.value);

    ((e) => {
        document.querySelector("#rb1_1").checked ? 
        e.ch1.value = entryForm7 + 1 : 
        document.querySelector("#rb1_2").checked ? 
        e.ch1.value = entryForm7 - 1 : 0;
    })(document.forms[7]);
    
})

// Le bouton "sauve" place la valeur actuelle du champ comme valeur par défaut.
// Le bouton "reset" fait son boulot...


let entryForm8;

document.forms[8].b1.addEventListener('click', () => {

    ((e) => {
        e.ch1.defaultValue = "";
        entryForm8 = e.ch1.value;
        e.ch1.defaultValue = entryForm8;
    })(document.forms[8])

})

document.forms[8].b2.addEventListener('click', () => document.forms[8].ch1.value = document.forms[8].ch1.defaultValue)


// Place la valeur et le texte de l'option sélectionnée à l'intérieur des champs correspondants

document.forms[9].ch1.value = "";
document.forms[9].ch2.value = "";

document.forms[9].addEventListener("change", () => {

      ((e) => {    
      Array.from(e.s1.options).forEach((option) => {
        if(option.selected) {
            e.ch1.value = option.value;
            e.ch2.value = option.text;
        }
      }) 
    } )(document.forms[9])
})

// Place les valeurs et les textes des options sélectionnées à l'intérieur des champs correspondants

document.forms[10].ch1.value = "";
document.forms[10].ch2.value = "";

document.forms[10].addEventListener("change", () => {

      ((e) => {    
      Array.from(e.s1.options).forEach((option) => {
        if(option.selected) {
            e.ch1.value = option.value;
            e.ch2.value = option.text;
        }
      }) 
    } )(document.forms[10])
})

// Permutte les valeurs des différents champs dans le sens de la flèche (en boucle)

let input1;
let input2; 
let input3; 
let input4; 
let input5;

const pressLeft = () => {
  
    input1 = document.querySelector('.data-controls > input:first-of-type').value;
    input2 = document.querySelector('.data-controls > input:nth-of-type(2)').value;
    input3 = document.querySelector('.data-controls > input:nth-of-type(3)').value;
    input4 = document.querySelector('.data-controls > input:nth-of-type(4)').value;
    input5 = document.querySelector('.data-controls > input:last-of-type').value;

    document.querySelector('.data-controls > input:first-of-type').value = input2;
    document.querySelector('.data-controls > input:nth-of-type(2)').value = input3;
    document.querySelector('.data-controls > input:nth-of-type(3)').value = input4;
    document.querySelector('.data-controls > input:nth-of-type(4)').value = input5;
    document.querySelector('.data-controls > input:last-of-type').value = input1;

}

const pressRight = () => {

    input1 = document.querySelector('.data-controls > input:first-of-type').value;
    input2 = document.querySelector('.data-controls > input:nth-of-type(2)').value;
    input3 = document.querySelector('.data-controls > input:nth-of-type(3)').value;
    input4 = document.querySelector('.data-controls > input:nth-of-type(4)').value;
    input5 = document.querySelector('.data-controls > input:last-of-type').value;

    document.querySelector('.data-controls > input:first-of-type').value = input5;
    document.querySelector('.data-controls > input:nth-of-type(2)').value = input1;
    document.querySelector('.data-controls > input:nth-of-type(3)').value = input2;
    document.querySelector('.data-controls > input:nth-of-type(4)').value = input3;
    document.querySelector('.data-controls > input:last-of-type').value = input4;
}


document.forms[11].gauche.addEventListener('click', () => pressLeft())

document.forms[11].droite.addEventListener('click', () => pressRight())

// Faire basculer les items sélectionnés entre les deux listes.

const list1 = document.forms[12].querySelector('select:first-of-type');
const list2 = document.forms[12].querySelector('select:nth-of-type(2)');
const options = Array.from(document.forms[12].querySelectorAll('option'));

document.forms[12].gauche.addEventListener('click', () => options.forEach((option) => option.selected ? list1.append(option) : 0))

document.forms[12].droite.addEventListener('click', () => options.forEach((option) => option.selected ? list2.append(option) : 0))

// 3 Champs de 5 caractères qui ne sont accesibles que si les champs précédents sont remplis(genre entrée de clé)

let form14Input1 = document.querySelector('div:nth-of-type(14) input:first-of-type');
let form14Input2 = document.querySelector('div:nth-of-type(14) input:nth-of-type(2)');
let form14Input3 = document.querySelector('div:nth-of-type(14) input:last-of-type');

form14Input2.disabled = true;
form14Input3.disabled = true;

form14Input1.addEventListener('keyup', () => {

    form14Input1 = document.querySelector('div:nth-of-type(14) input:first-of-type');
    form14Input2 = document.querySelector('div:nth-of-type(14) input:nth-of-type(2)');

    if(form14Input1.value.length < 5) {
        form14Input2.disabled = true;
        form14Input3.disabled = true;
    } else if(form14Input1.value.length === 5 && form14Input2.value.length < 5) {
        form14Input2.disabled = false;
        form14Input2.focus();
        form14Input3.disabled = true;
    }

})

form14Input2.addEventListener('keyup', () => {

    form14Input2 = document.querySelector('div:nth-of-type(14) input:nth-of-type(2)');
    form14Input3 = document.querySelector('div:nth-of-type(14) input:last-of-type');

    if(form14Input2.value.length < 5) {
        form14Input3.disabled = true;
    } else {
        form14Input3.disabled = false;
        form14Input3.focus();
    }
})

// Elément qui disparait lorsque l'on coche la case. Il réapparait lorsque l'on décoche(style.display)

document.querySelector('div:nth-of-type(15) input[type=\"checkbox\"]').addEventListener('click', () => {
    
    document.querySelector('div:nth-of-type(15) input[type=\"checkbox\"]').checked ?
    document.querySelector('div:nth-of-type(15) input[type=\"text\"]').style.display = "none" :
    document.querySelector('div:nth-of-type(15) input[type=\"text\"]').style.display = "block";
    
})

// Un champ qui augmente en hauteur et en largeur de 1OOpx à chaque fois que l'on entre le focus dedans (parseInt() et style.height). Il retourne à son état initial en sortant.


document.querySelector('div:nth-of-type(16) input').addEventListener('focus', () => {
    document.querySelector('div:nth-of-type(16) input').style.width = "260px";
    document.querySelector('div:nth-of-type(16) input').style.height = "116px"; 
})



document.querySelector('div:nth-of-type(16) input').addEventListener('blur', () => {
    document.querySelector('div:nth-of-type(16) input').style.width = "170px";
    document.querySelector('div:nth-of-type(16) input').style.height = "16px"; 
})

// Soit 4 carrés de couleur. Si on clique sur un on lui ajoute la classe checked et on l'enlève à celui qui l'avait

const arrayCarre = Array.from(document.querySelectorAll('div:nth-of-type(17) > div div'));

arrayCarre.forEach((carre) => {

    carre.addEventListener('click', () => {
        arrayCarre.map((allCarre) => allCarre.classList.remove('checked'));
        carre.classList.add('checked');
    })

})

// Idem que le précédent mais on ajoute aussi la classe de couleur à un autre carré.(setAttribute(),getAttribute()))

const arrayCarre2 = Array.from(document.querySelectorAll('div:nth-of-type(18) > div div'));

arrayCarre2.forEach((carre) => {

    carre.addEventListener('click', () => {
        arrayCarre2.map((allCarre) => allCarre.classList.remove('checked'));
        carre.classList.add('checked');
        const getColor = carre.getAttribute('data-color');
        const carreResult = document.querySelector('#out');
        carreResult.classList.remove('rouge', 'vert', 'bleu', 'jaune');
        carreResult.classList.add(getColor);
        carreResult.setAttribute('data-color', getColor);
    })
})

// **BONUS**

// on porte l'image de gauche dans la zone de droite

const leftImage = document.querySelector('[name=\"i4\"]');

leftImage.addEventListener('click', () => {
    leftImage.style.position = "relative";
    leftImage.style.left = "800px";
})
