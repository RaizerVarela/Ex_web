Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual : 0 ,
    velMax : 200,
    aceleraMais(vel){
        if(this.velAtual + vel <= this.velMax){
            this.velAtual += vel
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    __proto__:carro,
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 230,
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(volvo, carro)



volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(200)
console.log(ferrari.status())