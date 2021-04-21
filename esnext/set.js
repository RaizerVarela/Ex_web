const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')

times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

console.log('Passando Array')

const nomes = ['Raizer', 'João', 'Anelyze', 'Juan', 'Esther']
const nomesSet = new Set(nomes)

console.log(nomesSet.size)
console.log(nomesSet.has('Anelyze'))