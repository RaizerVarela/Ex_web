const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if(err != null){
        return console.log("Error! Não foi possivel ler o arquivo!")
    } else{
        const config = JSON.parse(conteudo)
        console.log(`${config.db.host}:${config.db.port}`)
    }
})

fs.readdir(__dirname, (err, arquivo) => {
    if(err!=null){
        return console.log("Error!")
    } else{
        console.log(`Arquivos da pasta ${__dirname}:`)
        console.log(arquivo)
    }
})