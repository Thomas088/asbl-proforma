// Champ qui se vide lorsque l'on entre dedans et qui remet la valeur initiale si le champ est vide lorsqu'on le quitte

document.forms[0].ch1.addEventListener('focus', () => {        
    document.forms[0].ch1.value="";
})

// Champ dont la taille augmente lorsque l'on appuye sur une touche et qu'on est dedans

document.forms[1].ch1.addEventListener('focus', () => {
    document.forms[1].ch1.value="";
})

document.forms[1].ch1.addEventListener('blur', () => {
    if(document.forms[1].ch1.value === "") {
        document.forms[1].ch1.value = "Texte initial";
    }
})

// Champ dont la taille augmente lorsque l'on appuye sur une touche et qu'on est dedans
