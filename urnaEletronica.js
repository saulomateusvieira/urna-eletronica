function urnaEletronica() {

    console.log('Votação');

    console.log("Insira seu voto");

    let opcao = 0 ;
    let nome1 = 0 ;
    let nome2 = 0 ;
    let nome3 = 0 ;
    let contador = 0;
    let senha;
    senha = prompt('Digite uma senha');
    nome1 = prompt('Digite o nome do candidato 1');
    nome2 = prompt('Digite o nome do candidato 2');
    nome3 = prompt('Digite o nome do candidato 3');
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let branco = 0;
    let nulo = 0;
    let decisao = 'N';

    do {
        opcao = parseInt(prompt('digite a opção: \n' 
        + '|1|' + nome1 + '\n'
        + '|2|' + nome2 + '\n'
        + '|3|' + nome3 + '\n'
        + '|5| + Branco \n'
        + '|8| + Nulo \n'
        + 'Digite a senha para encerrar'));

        console.log('linha de instrução');
        contador++;
        if (opcao == 1) {
            candidato1++;
            console.log('você votou no candidato1');
        } else if (opcao == 2) {
            candidato2++;
            console.log('você votou no candidato2');
        } else if (opcao == 3) {
            candidato3++;
            console.log('você votou no candidato3');
        } else if (opcao == 5) {
            branco++;
            console.log('você votou em branco');
        } else if (opcao == 8) {
            nulo++;
            console.log('você votou nulo');
        } else if(opcao == senha) {
            decisao = prompt('deseja encerrar a votação \n S para sim, N para não');
            
        }
    } while (opcao !== 'S');

    contador = contador - 1 ;
    console.log('contagem', contador);
    console.log('total de votos do ', nome1, candidato1);
    console.log('total de votos do ', nome2, candidato2);
    console.log('total de votos do ', nome3, candidato3);
    console.log('total de votos brancos', branco);
    console.log('total de votos nulos ', nulo);

    const totaldevotos = (candidato1 + candidato2 + candidato3 + branco + nulo);
    console.log('total dos votos', totaldevotos);

    console.log('relação do candidato', nome1, candidato1);
    console.log('percentual de votos do candidato1', (candidato1 / totaldevotos) * 100 +'%');
    console.log('relação do candidato', nome2, candidato2);
    console.log('percentual de votos do candidato2', (candidato2 / totaldevotos) * 100 +'%');
    console.log('relação do candidato', nome3, candidato3);
    console.log('percentual de votos do candidato3', (candidato3 / totaldevotos) * 100 +'%');
    console.log('relação de votos em branco', branco);
    console.log('percentual de votos em branco ', (branco / totaldevotos) * 100 +'%');
    console.log('relação de votos nulos', nulo);
    console.log('percentual de votos nulos', (nulo / totaldevotos) * 100 +'%');
    

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        console.log('o vencedor é', nome1);
        console.log('total de votos do vencedor é', candidato1 + branco);
    } else if (candidato2 > candidato3 && candidato2 > candidato1) {
        console.log('o vencedor é', nome2);
        console.log('total de votos do vencedor é', candidato2 + branco);
    } else if (candidato3 > candidato2 && candidato3 > candidato1) {
        console.log('o vencedor é', nome3);
        console.log('total de votos do vencedor é', candidato3 + branco);
    } else {
        console.log("empate");
    }
}
urnaEletronica()