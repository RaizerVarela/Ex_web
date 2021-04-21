function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        return gerarNumerosEntre(max, min)
    } else {
        return new Promise(resolve => {
            setTimeout(function(){
                const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
                resolve(aleatorio)
            }, tempo)
        })
    }
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 300),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1000),
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('promise'))