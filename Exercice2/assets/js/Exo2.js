// Déclaration des variables
let div = document.querySelector ('div');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

// Création des Listeners
btn1.addEventListener('click', bold);
btn2.addEventListener('click', color);
btn3.addEventListener('click', font);

// Création des fonctions

// Fonction Gras
function bold(){
    if(div.style.fontWeight == 'bold'){
        div.style.fontWeight = 'initial';
    }else {
        div.style.fontWeight = 'bold';
    };
};


// Fonction Couleur
function color() {
    div.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
};


// Font Taille
function font() {
    if(div.style.fontSize == 'large'){
        div.style.fontSize = '';
    }else {
        div.style.fontSize = 'large'
    };
};