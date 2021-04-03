const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'
const templete = `
    Ola
    ${nome}!`
console.log(concatenacao, templete)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ola... ${up('Cuidado')}!`)