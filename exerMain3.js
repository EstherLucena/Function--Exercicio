// Lista de alunos com três notas cada
const alunos = [
    { nome: "Alice", notas: [8, 7, 9] },
    { nome: "Bob", notas: [6, 7, 5] },
    { nome: "Carol", notas: [7, 8, 8] },
    { nome: "David", notas: [5, 6, 7] },
    { nome: "Eva", notas: [9, 9, 8] }
  ];
  
  // Função para calcular a média das notas de um aluno
  function calcularMediaAluno(notas) {
    const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    return somaNotas / notas.length;
  }
  
  // Função para imprimir resultados (aprovados ou reprovados)
  function imprimirResultados(listaAlunos) {
    listaAlunos.forEach(aluno => {
      const mediaAluno = calcularMediaAluno(aluno.notas);
      if (mediaAluno >= 7) {
        console.log(`${aluno.nome} foi APROVADO com média ${mediaAluno.toFixed(2)}`);
      } else {
        console.log(`${aluno.nome} foi REPROVADO com média ${mediaAluno.toFixed(2)}`);
      }
    });
  }
  imprimirResultados(alunos);  

  
