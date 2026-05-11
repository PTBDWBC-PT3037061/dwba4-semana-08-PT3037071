// 1.1. Classe Aluno
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        // 1.1.1. Propriedades
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    // 1.1.2.1. Método nomeCompleto
    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    // 1.1.2.2. Método media
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    // 1.1.2.3. Método situacao
    situacao() {
        if (this.media() > 6) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

// 1.2. Array com 5 objetos Aluno (já satisfaz o item 1.5 de no mínimo 3 alunos)
const arrayDeAlunos = [
    new Aluno("João", "da Silva", 7, 8.5),
    new Aluno("Aline", "Ferreira", 9, 8),
    new Aluno("Bruno", "Gomes", 4, 5),
    new Aluno("Carla", "Mendes", 8, 7),
    new Aluno("Diego", "Alves", 5, 6)
];

// 1.3. Função que percorre o array e mostra os dados
function mostrarDadosAlunos(alunos) {
    let divResultados = document.getElementById("resultados");
    let conteudoHTML = "";

    alunos.forEach(aluno => {
        // Mostrando no console
        console.log(`Nome Completo: ${aluno.nomeCompleto()} | Média: ${aluno.media().toFixed(2)} | Situação: ${aluno.situacao()}`);
        
        // Exibindo na página HTML para visualização direta
        conteudoHTML += `<p><strong>Nome Completo:</strong> ${aluno.nomeCompleto()} <br>
                         <strong>Média:</strong> ${aluno.media().toFixed(2)} <br>
                         <strong>Situação:</strong> ${aluno.situacao()}</p><hr>`;
    });

    divResultados.innerHTML = conteudoHTML;
}

// Executando a função
mostrarDadosAlunos(arrayDeAlunos);