const pai = {nome:'Pedro', corCabelo:"preto"}

const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha.corCabelo, filha.nome)