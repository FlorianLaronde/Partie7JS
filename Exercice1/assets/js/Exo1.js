let buttonElement = document.getElementById('btn');
buttonElement.onclick = function (){
    let number1 = (document.getElementById('number1').value);
    let number2 = (document.getElementById('number2').value);

    let result = multiply(number1, number2);
    document.getElementById('result').innerHTML ='Le résultat de la multiplication est égale à ' + result;
}
// fonction qui multiplie les deux nombres et renvoie le résultat
function multiply(number1, number2) {
    return number1 * number2;
}