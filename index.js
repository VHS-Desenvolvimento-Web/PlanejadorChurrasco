let inputAdultos = document.getElementById('numAdultosInput')
let inputCriancas = document.getElementById('numCriancasInput')
let inputBebidas = document.getElementById('numBebidasInput')

function atualizarPlanejamento() {
    const planejamento = {
        adultos: Number(inputAdultos.value),
        criancas: Number(inputCriancas.value),
        bebidas: Number(inputBebidas.value)
    }

    console.log('Total Adultos: ', planejamento.adultos)
    console.log('Total Crianças: ', planejamento.criancas)
    console.log('Total Bebidas: ', planejamento.bebidas)
}

inputAdultos.addEventListener('input', atualizarPlanejamento)
inputCriancas.addEventListener('input', atualizarPlanejamento)
inputBebidas.addEventListener('input', atualizarPlanejamento)
