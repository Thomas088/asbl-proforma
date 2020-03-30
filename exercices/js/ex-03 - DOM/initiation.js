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
        if(e.ch1.value === "") {
            e.ch1.value = "Texte initial";
        }
    })(document.forms[1]);

});

// La taille augmente lorsque l'on appuye sur une touche et qu'on est dedans

document.forms[2].ch1.addEventListener('focus', () => {
    document.forms[2].ch1.value="";
});

document.forms[2].ch1.addEventListener('keydown', () => {  
    document.forms[2].ch1.size++;
});

// Affiche les caractères quand la case est cochée, les masque sinon

document.forms[3].cb1.addEventListener('click', () => { 

    ((e) => {
        if(e.ch1.type === "password") {     
            e.ch1.type = "text";
        } else {
            e.ch1.type = "password";
        }
    })(document.forms[3]);
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
    if(document.forms[6].cb1.checked) {
        document.forms[6].ch1.focus();
        document.forms[6].ch1.value = '0';
    } else {
        document.forms[6].ch1.value = '';
    }
})

// Un champ non modifiable qui s'incrémente ou se décrémente selon l'option sélectionnée

let entryForm7;

document.forms[7].ch1.value = 0;

document.forms[7].b1.addEventListener('click', () => {

    entryForm7 = Number(document.forms[7].ch1.value);

    if(document.querySelector("#rb1_1").checked) {
        document.forms[7].ch1.value = entryForm7 + 1;
    } else if(document.querySelector("#rb1_2").checked) {
        document.forms[7].ch1.value = entryForm7 - 1;
    }
    
})

// Le bouton "sauve" place la valeur actuelle du champ comme valeur par défaut.
// Le bouton "reset" fait son boulot...

document.forms[7].ch1.value = "";

let entryForm8

document.forms[8].b1.addEventListener('click', () => {

    entryForm8 = document.forms[7].ch1.value;
    document.forms[7].ch1.defaultValue = entryForm8;

})

document.forms[8].b2.addEventListener('click', () => {

})


    