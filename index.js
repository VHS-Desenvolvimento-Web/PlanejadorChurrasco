const mensagemAviso = document.getElementById('aviso')
const inputAdultos = document.getElementById('numAdultosInput')
const inputCriancas = document.getElementById('numCriancasInput')
const fomeLeve = document.getElementById('leve')
const fomeMedia = document.getElementById('medio')
const fomeAlta = document.getElementById('esfomeado')
const inputBebidas = document.getElementById('numBebidasInput')
const inputDuracao = document.getElementById('duracao')
const outputCarne = document.getElementById('carne')
const outputGelo = document.getElementById('gelo')
const outputCarvao = document.getElementById('carvao')

function calcularPessoas() {
    const adultos = Number(inputAdultos.value)
    const criancas = Number(inputCriancas.value)

    const pessoas = adultos + (criancas / 2)
    return pessoas
}

function validarCarne() {
    if (calcularPessoas() < 2) {
        mensagemAviso.textContent = 'Adicione mais adultos ao churrasco.'
        mensagemAviso.classList.add('erro')
        return false
    } else {
        return calcularCarne()
    }
}

function calcularCarne() {
    const pessoas = calcularPessoas()
    let carneGramas = 0;

    if (fomeLeve.checked) {
        carneGramas = pessoas * 200
    } else if (fomeMedia.checked) {
        carneGramas = pessoas * 400
    } else if (fomeAlta.checked) {
        carneGramas = pessoas * 600
    }
    return carneGramas
}

function validarGelo() {
    if (inputBebidas.value < 1) {
        mensagemAviso.textContent = 'Adicione mais litros de bebida.'
        mensagemAviso.classList.add('erro')
        return false
    } else {
        return calcularGelo()
    }
}

function calcularGelo() {
    let gelo = inputBebidas.value / 4
    return gelo
}

function calcularCarvao() {
    let carvao = calcularCarne() * 1.15
    return carvao
}

function calcularPlanejamento() {
    if (!validarCarne() || !validarGelo() || !calcularDuracao()) { return }
    outputCarne.textContent = calcularCarne()
    outputGelo.textContent = calcularGelo()
    outputCarvao.textContent = calcularCarvao()
}

function calcularDuracao() {
    const duracao = inputDuracao.value
    if (duracao === '00:00' || !duracao) {
        mensagemAviso.textContent = 'Preencha a duração do evento.'
        mensagemAviso.classList.add('erro')
        return false
    } else if (duracao < '04:00') {
        return true
    }

    const carneNova = Math.round(calcularCarne() * 1.5)
    const geloNovo = Math.round(calcularGelo() * 1.5)
    const carvaoNovo = Math.round(calcularCarvao() * 1.5)

    outputCarne.textContent = carneNova
    outputGelo.textContent = geloNovo
    outputCarvao.textContent = carvaoNovo

    return novasComidas
}