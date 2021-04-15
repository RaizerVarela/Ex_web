const produtos = {}

const sequencia = {
    _id: 1,
    get id() { return this._id++}
}

function salvarProduto(produto) {
    if(!produtos.id) produto.id = sequencia.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = {salvarProduto, getProduto, getProdutos}