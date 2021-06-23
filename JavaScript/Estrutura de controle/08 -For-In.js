const object = [10,8,6,8,5,2] // for in com array

for (const i in object) {
//    console.log(object[i])
}

const Obj = { // for in com objeto
    nome: 'Raoni',
    idade: '29 anos',
    peso: '110kg',
    altura: '1.77 cm'
}

for (const i in Obj) { // forma de printar um Objeto
 // console.log(Obj[i])
    console.log(`${i} = ${Obj[i]}`) // Desta forma fica mais elegante.
}
