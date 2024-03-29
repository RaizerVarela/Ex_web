function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Foi')
        }, tempo)
    })
}

function retornarValor() {
    return new Promise( resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 3}...`)
}

executar()