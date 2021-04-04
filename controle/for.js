const notas = [1, 2, 3, 4, 5, 61]

notas [0] = 3;

console.log(notas[0])

const pessoa = {
    nome: 'Ana',
    idade: 8,
    peso: 35
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}