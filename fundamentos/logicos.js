function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const compraTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete

    return {compraSorvete, compraTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))

