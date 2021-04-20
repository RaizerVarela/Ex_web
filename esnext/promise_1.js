let a = new Promise(function(resolve) {
    resolve({
        pessoas: [
            {
                nome: 'Ana',
                sobrenome: 'Beatriz',
                idade: 21
            },
            {
                nome: 'Victor',
                sobrenome: 'Neves',
                idade: 21
            },
            {
                nome: 'Anelyze',
                sobrenome: 'Augusto',
                idade: 20
            }
        ]
    })
})

a  
    .then(valor => valor.pessoas[0])
    .then(valor => valor.sobrenome)
    .then(valor => console.log(valor.toUpperCase()))