function gerarNumerosEntre(min, max){
    if(min > max){
        return gerarNumerosEntre(max, min)
    } else {
        return new Promise(resolve => {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        })
    }
}

gerarNumerosEntre(10, 30)
    .then(console.log)