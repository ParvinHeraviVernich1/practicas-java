let peso = parseInt(prompt('Ingrese su peso(kg):')) prompt is not defined
let altura = parseInt(prompt('Ingrese su altura(cm):'))

let imc = peso / (peso * altura)
//se puede poner: switch (true) {
switch (imc) {
    case (imc <18.5):
        console.log(imc + '- Bajo de peso')
        break;
        case (imc >= 18.5 && imc < 24.9):
        console.log(imc + '- Normal')
        break;
        case (imc >= 24.9 && imc < 29.9):
        console.log(imc + '- Sobrepeso')
        break;
        default:
            console.log(imc + '- Obesidad')
        break;
}

let comidasFavoritas = ['milanesa', 'patatas bravas', 'paella'];

//opcion con for
for()