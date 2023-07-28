var idade = 66

if (idade >= 16 && idade < 18) {
    console.log(`Voto opcional`)
} else if (idade >= 18 && idade <=64) {
    console.log(`Voto obrigatório`)
} else if (idade < 16) {
    console.log(`N ão pode votar`)
} else if (idade >= 65) {
    console.log(`Voto opcional`)
}