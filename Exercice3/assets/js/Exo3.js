let button = document.getElementById('btn');
// création de la fonction 
function multiplication(number1,number2){
    return number1 * number2;
}

// création de la fonction fléchée qui récupére les inputs 
button.onclick = () => {
    // on récupére les valeurs des inputs
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = multiplication(number1, number2);
};
