function run(fun){
    fun()
}

run(function(){console.log('Executando')})

function soma(a, b, c){
    a = isNaN(a) ? a : 1
    b = isNaN(b) ? b : 1
    c = isNaN(c) ? c : 1
    return a+b+c
}

function soma1(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

// Melhor solução

function soma2(a=1, b=1, c=1){
    return a + b + c
}