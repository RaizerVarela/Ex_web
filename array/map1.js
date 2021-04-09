const num = [1, 2, 3, 4 , 5]

const duplica = num.map(function(num){
    return num * 2
})

console.log(duplica)

const soma10 = num => num+10
const mult3 = num => num*3
const transDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}`

console.log(num.map(soma10).map(mult3).map(transDinheiro))