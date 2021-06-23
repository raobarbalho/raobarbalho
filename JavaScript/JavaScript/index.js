 let pessoa = {nome:'Raoni', falar(){ 
     console.log(`Olá, meu nome é ${this.nome}!`)
    }
}
 
 let sobreNome = (nome) => {
  console.log(`${nome} Barbalho`)
}

const {nome} = pessoa
console.log(nome)
console.log(pessoa.nome)
const {falar} = pessoa
console.log(falar)
pessoa.falar()

sobreNome('Raoni')
