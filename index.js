const mensagemAviso = document.getElementById('aviso')
const inputAdultos = document.getElementById('numAdultosInput')
const inputCriancas = document.getElementById('numCriancasInput')
const fomeLeve = document.getElementById('leve')
const fomeMedia = document.getElementById('medio')
const fomeAlta = document.getElementById('esfomeado')
const inputBebidas = document.getElementById('numBebidasInput')
const inputDuracao = document.getElementById('duracao')

function calcularPessoas() {
    const adultos = Number(inputAdultos.value)
    const criancas = Number(inputCriancas.value)

    if (Number(inputAdultos.value) >= 2) {
        const pessoas = adultos + (criancas / 2)
        console.log('Tem ', pessoas, ' pessoas no churrasco')
        return pessoas
    } else {
        mensagemAviso.textContent = 'Adicione mais adultos ao churrasco.'
        return
    }
}

function validarCarne() {
    if (calcularPessoas() < 2) {
        mensagemAviso.textContent = 'Adicione mais adultos ao churrasco.'
    } 
    
    else {
        calcularGramas()
    }
}

function calcularGramas() {
    const pessoas = calcularPessoas()
    let carneGramas = 0;

    if (fomeLeve.checked) {
        carneGramas = pessoas * 200
    } else if (fomeMedia.checked) {
        carneGramas = pessoas * 400
    } else if (fomeAlta.checked) {
        carneGramas = pessoas * 600
    }
    calcularDuracao()
    return carneGramas
}

function calcularGelo() {
    const bebidaLitros = Number(inputBebidas.value)
    let gelo = 0
    
    if (bebidaLitros < 2 || bebidaLitros === '') {
        mensagemAviso.textContent = 'Adicione mais litros de bebida.'
        return
    } else {
        gelo = bebidaLitros / 4
    }

    return gelo
}

function calcularDuracao() {
    const duracao = inputDuracao.value

    if (duracao > '04:00') { // continuar aqui

    }
}