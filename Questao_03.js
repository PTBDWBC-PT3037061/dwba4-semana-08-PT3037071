// Criando uma estrutura (array de objetos) para abrigar, no mínimo, 3 alunos
const listaAlunos = [
    {
        nome: "João da Silva",
        primeiraNota: 7,
        segundaNota: 8.5
    },
    {
        nome: "Maria Oliveira",
        primeiraNota: 8,
        segundaNota: 9
    },
    {
        nome: "Carlos Eduardo",
        primeiraNota: 5,
        segundaNota: 6
    }
];

// Iterando sobre cada aluno para realizar os cálculos e exibir os alertas
for (let i = 0; i < listaAlunos.length; i++) {
    let alunoNome = listaAlunos[i].nome;
    let nota1 = listaAlunos[i].primeiraNota;
    let nota2 = listaAlunos[i].segundaNota;
    
    // Recebendo os valores das multiplicações
    let valorMult1 = nota1 * 0.6;
    let valorMult2 = nota2 * 0.4;
    
    // Recebendo a soma das variáveis
    let notaTotal = valorMult1 + valorMult2;

    // Alerta informando o nome e as notas individuais
    alert(`Aluno: ${alunoNome}\nPrimeira Nota: ${nota1}\nSegunda Nota: ${nota2}`);
    
    // Alerta informando a nota total
    alert(`Aluno: ${alunoNome}\nNota Total (Média): ${notaTotal.toFixed(2)}`);
}