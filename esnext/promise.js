function falarDepoisDe(seg, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, seg * 3000)
    })
}

falarDepoisDe(3, 'Olá a todos')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
