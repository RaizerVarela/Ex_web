const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Apagador", "preco": 5.45}',
    '{"nome": "Caneta", "preco": 2.45}',
    '{"nome": "Mochila", "preco": 25.45}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObjeto).map(apenasPreco))
