function criarProduto(nome, preco, desconto=0.1){
    return{
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('ipad', 3000, 0.2))