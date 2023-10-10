function urnaEletronica() {
    
    let opcao
    let contador = 0

    do {
        opcao = parseInt(prompt('Digite a opção:'))

        console.log("Opção 1 selecionada")
        contador++ 
    } while (opcao === 1)

    contador--
    console.log(contador)
}

urnaEletronica()