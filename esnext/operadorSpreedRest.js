const funcionario = { nome: 'Maria', salario: 12399.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

const grupoA = ['João', 'Pedro', 'Maria']
const grupoFinal = ['Maiara', 'Anelyze', ...grupoA]
console.log(grupoFinal)