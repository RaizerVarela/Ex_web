const produtos = [
    {nome: 'notebook', preco: 3000, fragil: true},
    {nome: 'tablet', preco: 2500, fragil: true },
    {nome: 'copo plastico', preco: 4.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco >= 500 && p.fragil == true
}))

// ou

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))