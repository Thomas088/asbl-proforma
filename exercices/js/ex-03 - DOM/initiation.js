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

document.forms[2].ch1.addEventListener('focus', () => {
    document.forms[2].ch1.value="";
})

document.forms[2].ch1.addEventListener('keydown', () => {  
    document.forms[2].ch1.size++;
})

// Champ qui affiche les caractères quand la case est cochée, les masque sinon

document.forms[3].cb1.addEventListener('click', () => { 
      
    if(document.forms[3].ch1.type === "password") {     
        document.forms[3].ch1.type = "text";
    } else {
        document.forms[3].ch1.type = "password";
    } 
})

// Champ qui affiche les caractères quand on maintient la souris enfoncé sur le carré, les masque sinon

document.forms[4].querySelector('.enfonce').addEventListener('mousedown', () => { 
    document.forms[4].ch1.type = "text";
})

document.forms[4].querySelector('.enfonce').addEventListener('mouseup', () => {     
    document.forms[4].ch1.type = "password";  
})

// Champ qui jete le focus quand essaye de lui donner

document.forms[5].ch1.addEventListener('focus', () => {     
    document.forms[5].ch1.blur();  
})

/* Champ qui jete le focus quand essaye de lui donner et que la case à cochée n'est pas activée.<br/>
Si le champ est rempli et que l'on décoche la case, on vide le champ.
Si on coche la case, on amène le focus dans le champ, et on place la valeur 0; */


    // document.forms[6].ch1.addEventListener('focus', () => {
    //     document.forms[6].ch1.blur();
    // })


document.forms[6].cb1.addEventListener('click', (e) => {

    const focusElement = (e) => {
        if(e.cb1.checked) {
            e.ch1.focus();
            e.ch1.value = 0; 
        } else {
            if(e.ch1.value !== "") {
                e.ch1.value = "";
            }
            document.forms[6].ch1.addEventListener('focus', () => {
                document.forms[6].ch1.blur();
            })       
        } 
    }

    focusElement(document.forms[6]);
    
})