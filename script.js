var Lado = document.getElementById('a');
var Base = document.getElementById('b');
var Rescultado = document.getElementById('Resultado');

function lego(){
    console.log('as')
    let a = parseInt(Lado.value)
    let b = parseInt(Base.value)

    Rescultado.innerText = "o valor do C é igual a " + (a**2+b**2);
}
