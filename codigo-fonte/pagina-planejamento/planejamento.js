function calcular() {

    let renda = document.querySelector('input#valor')
    let porcento = document.querySelector('select#porcento')

    let rend = Number(renda.value)
    let porcent = Number(porcento.value)
    
    let r = rend * porcent / 100
    let rst = rend - r

    let restante = document.querySelector('div#button_restante')
    restante.innerHTML = rst.toLocaleString('pt-BR',{style:'currency',currency:'BRL'}) 

    let resultado = document.querySelector('div#button_resultado')
    resultado.innerHTML = r.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})

    if (rend == 0 || porcent == 0){
        alert('Verifique se os dados estão preenchidos corretamente!')
        restante.innerHTML = 'R$ 0,00'
        resultado.innerHTML = 'R$ 0,00'
    }
    
    if (rend < 0 ){
        alert('Por favor, informe apenas números positivos!')
        restante.innerHTML = 'R$ 0,00'
        resultado.innerHTML = 'R$ 0,00'
    }  
}


