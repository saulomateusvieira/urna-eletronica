function audioConfirmacaofuncao() {
    var audioConfirmacao = document.getElementById("audioConfirmacao");
    return audioConfirmacao;
}

function Datafuncao() {
    var data = new Date ();
    return data;
}

async function verificarIntegridadeUrna() {

    // Biblioteca CryptoJS: https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js

    let hashUrnaAtual;
    let hashVerificado;

    await fetch('urnaEletronica.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(conteudo => hashUrnaAtual = conteudo);
    
    await fetch('hashVerificado')
        .then(conteudo => conteudo.text())
        .then(conteudo => hashVerificado = conteudo);
        
    return {
        status: hashUrnaAtual === hashVerificado,
        hashUrnaAtual: hashUrnaAtual,
        hashVerificado: hashVerificado
    };

}
//54804bdc60fee7787ea36dc16092894d0013aca07a015930e64bb35a3ad48a3a


function urnaEletronica() {

    // declaração de variáveis
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosCandidato4 = 0;
    let votosCandidato5 = 0;
    let votosBrancos = 0;
    let votosNulos = 0;
    let totalVotos = 0;
    let voto;
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true;
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;
    let encerrarVotacao;
    let senhaMesario;
    let configuracaoInicial = true;
    var audioConfirmacao = document.getElementById("audioConfirmacao");
    const data = new Date ();
    
    let candidatos = [
        [21, 'Arnaldo'],
        [35, 'Fernando'],
        [42, 'Pedro'],
        [57, 'Joao'],
        [63, 'Carlos'],
        ['00', 'Branco']
        ]
    
    //console.clear();
    console.log('** CONFIGURAÇÃO DA URNA **');
    console.log('Início do programa'+ Datafuncao().toLocaleString());

fetch()
        .then()

    senhaMesario = parseInt(prompt('Digite sua senha de mésário:'));
    
    do {//console.clear();
        console.log('Opções de voto:');
        for (i = 0; i < candidatos.length; i++) {
            console.log(candidatos[i][0]); console.log(candidatos[i][1]); console.log(candidatos[i][2]); 
        }

        voto = parseInt(prompt('Digite sua opção de voto:'));

        totalVotos++;

        if (voto === candidatos[0][0]) {(confirm('Você está votando no candidato: [' + candidatos[0][1] + '] Deseja prosseguir? Pressione [ok] para prosseguir ou [cancelar] para votar novamente'))
            votosCandidato1++;
            audioConfirmacaofuncao().play();
        } else if (voto === candidatos[1][0]) {(confirm('Você está votando no candidato: [' + candidatos[1][1] + '] Deseja prosseguir? Pressione [ok] para prosseguir ou [cancelar] para votar novamente'))
            votosCandidato2++;
            audioConfirmacaofuncao().play();
        } else if (voto === candidatos[2][0]) {(confirm('Você está votando no candidato: [' + candidatos[2][1] + '] Deseja prosseguir? Pressione [ok] para prosseguir ou [cancelar] para votar novamente'))
            votosCandidato3++;
            audioConfirmacaofuncao().play();
        } else if (voto == candidatos[3][0]) {(confirm('Você está votando em [Branco]. Deseja prosseguir? Pressione [ok] para prosseguir ou [cancelar] para votar novamente'))
            votosBrancos++;
            audioConfirmacaofuncao().play();
        /*} else if (voto === 0) {
            return;*/
        } else if (voto === senhaMesario) {
            // segundo passo de confirmação para encerrar
            encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').toUpperCase();
            
            if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
                alert('Opcão inválida');
            }

            totalVotos--;
            
        } else {
            
            if (confirm('ATENÇÃO: o seu voto será ANULADO. Deseja prosseguir?')) {
                votosNulos++;
            } else {
                totalVotos--;
            }
        }

    } while (encerrarVotacao !== 'S');

    // Saída para o usuário: boletim de urna
    //console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log('Total de votos: ' + totalVotos);

    // se houver votação
    if (totalVotos > 0) {

        console.log(`Total de votos do(a) candidato(a) ${nomeCandidato1}: ${votosCandidato1} voto(s) (${(votosCandidato1 / totalVotos * 100).toFixed(2)}%)`);
        console.log(`Total de votos do(a) candidato(a) ${nomeCandidato2}: ${votosCandidato2} voto(s) (${(votosCandidato2 / totalVotos * 100).toFixed(2)}%)`);
        console.log(`Total de votos do(a) candidato(a) ${nomeCandidato3}: ${votosCandidato3} voto(s) (${(votosCandidato3 / totalVotos * 100).toFixed(2)}%)`);
        console.log(`Total de votos brancos: ${votosBrancos} voto(s) ${(votosBrancos / totalVotos * 100).toFixed(2)}%)`);
        console.log(`Total de votos nulos: ${votosNulos} voto(s) (${(votosNulos / totalVotos * 100).toFixed(2)} + '%)`);

        // determinação do ganhador
        if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3 && votosCandidato1 > votosCandidato4 && votosCandidato1 > votosCandidato5) {
            nomeGanhador = nomeCandidato1;
            votosGanhador = votosCandidato1 + votosBrancos;
        } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3 && votosCandidato2 > votosCandidato4 && votosCandidato2 > votosCandidato5) {
            nomeGanhador = nomeCandidato2;
            votosGanhador = votosCandidato2 + votosBrancos;
        } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2 && votosCandidato3 > votosCandidato4 && votosCandidato3 > votosCandidato5) {
            nomeGanhador = nomeCandidato3;
            votosGanhador = votosCandidato3 + votosBrancos;
        } 
          else if (votosCandidato4 > votosCandidato1 && votosCandidato4 > votosCandidato2 && votosCandidato4 > votosCandidato3 && votosCandidato4 > votosCandidato5) {
            nomeGanhador = nomeCandidato4;
            votosGanhador = votosCandidato4 + votosBrancos;
        } 
          else if (votosCandidato5 > votosCandidato1 && votosCandidato5 > votosCandidato2 && votosCandidato5 > votosCandidato3 && votosCandidato5 > votosCandidato4) {
            nomeGanhador = nomeCandidato5;
            votosGanhador = votosCandidato5 + votosBrancos;
        } 
          else {
            ganhador = false;
        }

        // exibição do ganhador
        console.log('----------------------');
        if (ganhador) {
            console.log('O ganhador desta urna foi ' + nomeGanhador + ' com ' + votosGanhador + ' votos (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
        } else {
            console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos');
        }
        
    } else {
        console.log('Não houve votação nesta urna');
    }

 verificarIntegridadeUrna();

    console.log('Fim do programa' + Datafuncao().toLocaleString());

}

