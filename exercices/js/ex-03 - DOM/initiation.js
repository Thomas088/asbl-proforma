// Se vide lorsque l'on entre dedans

document.forms[0].ch1.addEventListener('focus', () => {        
    document.forms[0].ch1.value="";
});

// Se vide lorsque l'on entre dedans et qui remet la valeur initiale si le champ est vide lorsqu'on le quitte

document.forms[1].ch1.addEventListener('focus', () => {
    document.forms[1].ch1.value="";
});

document.forms[1].ch1.addEventListener('blur', () => {
    
    ((e) => {
        e.ch1.value === "" ? e.ch1.value = "Texte initial" : 0;
    })(document.forms[1])

})

// La taille augmente lorsque l'on appuye sur une touche et qu'on est dedans

document.forms[2].ch1.value = "";

document.forms[2].ch1.addEventListener('keydown', () => {  
    document.forms[2].ch1.size++
});

// Affiche les caractères quand la case est cochée, les masque sinon

document.forms[3].cb1.addEventListener('click', () => { 

    ((e) => {
        e.ch1.type === "password" ? e.ch1.type = "text" : e.ch1.type = "password";        
        }
    )(document.forms[3])

});

// Affiche les caractères quand on maintient la souris enfoncé sur le carré, les masque sinon


document.forms[4].querySelector('.enfonce').addEventListener('mousedown', () => { 
    document.forms[4].ch1.type = "text";
});

document.forms[4].querySelector('.enfonce').addEventListener('mouseup', () => {     
    document.forms[4].ch1.type = "password";  
});

// Jete le focus quand essaye de lui donner

document.forms[5].ch1.addEventListener('focus', () => {     
    document.forms[5].ch1.blur();  
})

/* Jete le focus quand essaye de lui donner et que la case à cochée n'est pas activée.
Si le champ est rempli et que l'on décoche la case, on vide le champ.
Si on coche la case, on amène le focus dans le champ, et on place la valeur 0; */

// !!!! Voir pour blur()

document.forms[6].cb1.checked = false;
document.forms[6].ch1.value = "";

document.forms[6].ch1.addEventListener('focus', () => {
    document.forms[6].ch1.blur();
})

document.forms[6].cb1.addEventListener('click', () => {

    ((e) => {
        if(e.cb1.checked) {
            e.ch1.focus();
            e.ch1.value = '0';
        } else {
            e.ch1.value = '';
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

document.forms[8].b2.addEventListener('click', () => {
    document.forms[8].ch1.value = document.forms[8].ch1.defaultValue;
})


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
;
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


document.forms[11].gauche.addEventListener('click', () => {
    pressLeft();
})

document.forms[11].droite.addEventListener('click', () => {
    pressRight();
})