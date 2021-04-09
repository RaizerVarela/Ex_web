const alunos = [
    {nome: 'Ana', nota: 7, bolsista: true},
    {nome: 'Joao', nota: 6.5, bolsista: true},
    {nome: 'Anelyze', nota: 8, bolsista: false}
]

const todosBolsistas = (resultadoAnterior, resultadoAtual) => resultadoAnterior && resultadoAtual
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultadoAnterior, resultadoAtual) => resultadoAnterior || resultadoAtual
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
