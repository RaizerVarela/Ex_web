//Cada dado
for(let letra of 'Raizer'){
    console.log(letra)
}

const materias = ['Engenharia de Software', 'Matematica Discreta', 'Banco de Dados']

//Indice
for (let materia in materias){
    console.log(materia)
}

//Cada dado
for (let materia of materias){
    console.log(materia)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

assuntosMap.forEach((vl, ch) => {
    console.log(ch, vl)
})

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let assunto of assuntosMap.values()){
    console.log(assunto)
}

//Também serve para Set()