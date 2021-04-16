const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesas = f => f.pais == 'China'
const feminina = f => f.genero == 'F'
const menorSalario = (funcAnterior, funcAtual) => {
    return funcAnterior.salario < funcAtual.salario ? funcAnterior : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data

    console.log(funcionarios.filter(chinesas).filter(feminina).reduce(menorSalario))    
})

