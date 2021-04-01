function imprimirSoma(a, b) {
    console.log(a+b)
}

console.log(imprimirSoma(2, 3))

function soma(a, b=1){
    return a+b
}

console.log(soma(2))

const somaArrowFunction = (a, b) => {
    return a+b
}

console.log(somaArrowFunction(2,1))

const subtracao = (a, b) => a - b
console.log(subtracao(4,2))
