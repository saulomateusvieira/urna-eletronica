function urnaEletronica() {
    
    let opcao = 0;
    let nome1 = 0;
    let nome2 = 0;
    let nome3 = 0;
    let contador = 0;
    nome1 = prompt("Digite o nome do candidato 1");
    nome2 = prompt("Digite o nome do candidato 2");
    nome3 = prompt("Digite o nome do candidato 3");
    let branco = 0;
    let nulo = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;

    do {
        opcao=parseInt(prompt('digite a opção'));
        console.log('linha de instrução');
        if (opcao == 1){
            candidato1 ++;
            console.log('Você votou no candidato 1');
        }else if(opcao ==2){
            candidato2 ++;
            console.log('Você votou no candidato 2');
        }else if(opcao ==3){
            candidato3 ++;
            console.log('Você votou no candidato 3');
        }
        else if(opcao ==5){
            branco ++;
            console.log('Você votou em branco');
        }
        else if(opcao ==8){
            nulo ++;
            console.log('Você votou nulo');

        } while (opcao !==0);
        contador = contador -1 ;
        console.log('contagem' ,contador);
        console.log('total de votos do ', nome, candidato1);
        console.log('total de votos do ', nome, candidato2);
        console.log('total de votos do ', nome, candidato3);
        console.log('total de votos brancos ', branco);
        console.log('total de votos nulos ', nulo);

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log('o vencedor é ', nome1);
        console.log('total de voto do vencedor é ', candidato1 + branco);
    } else if (candidato2 > candidato3 && candidato2 > candidato1) {
        console.log('o vencedor é', nome2);
        console.log('total de voto do vencedor é' , candidato2 + branco);
    } else if (candidato3 > candidato2 && candidato3 > candidato1) {
        console.log('o vencedor é ', nome3);
        console.log('total de voto do vencedor é', candidato3 + branco);
    } else {
        console.log('empate');
   }
}
}
urnaEletronica()