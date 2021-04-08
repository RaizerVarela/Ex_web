    const pessoas = ['Ana', 'Raquel', 'Esther', 'Anelyze', 'Maiara']
    console.log(pessoas)

    pessoas.pop()
    console.log(pessoas)

    pessoas.push('Maiara')
    console.log(pessoas)

    pessoas.shift()
    console.log(pessoas)

    pessoas.unshift('Ana')
    console.log(pessoas)

    pessoas.splice(2, 0, 'joao', 'mario')
    console.log(pessoas)

    pessoas.splice(2, 2)
    console.log(pessoas)

    const algumasPessoas2 = pessoas.slice(2)
    console.log(algumasPessoas2)

    const algumasPessoas = pessoas.slice(1,3)
    console.log(algumasPessoas)
