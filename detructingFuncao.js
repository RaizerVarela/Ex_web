function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min 
    return Math.floor(valor)
}

console.log(rand({min: 200, max: 300 }))
console.log(rand({}))

function rand2({min = 0, max = 1000}){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max-min) + min 
    return Math.floor(valor) //Math.floor arredonda para baixo e ceil para cima
}

console.log(rand2({max:200, min: 300}))