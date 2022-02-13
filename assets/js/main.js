// Capturar evento de submit do formulário 
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(evento) {
    evento.preventDefault(); // previne o envio do form (para a raíz '/')
    // console.log('Evento previnido');

    const inputPeso = evento.target.querySelector('#peso'); // pega o input
    const inputAltura = evento.target.querySelector('#altura'); // pega o input
    console.log(inputPeso);

    const peso = Number(inputPeso.value); // pega o valor do input
    const altura = Number(inputAltura.value);

    /*verificar*/
    if (!peso) { // se for false -> quando digita uma String (em vez de Number) aparece NaN e é avaliado como false
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);

    const nivelImc = getNivelImc(imc);
    //console.log(imc ,nivelImc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
   
    setResultado (msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.9) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso/(altura ** 2);  
    return imc.toFixed(2);
}

function criaP (className) {
    const p = document.createElement('p'); 
    p.classList.add(className); 
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    
    resultado.innerHTML = ''; //limpando o html
    
    const p = criaP("paragrafo-resultado");
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

