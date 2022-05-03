alert('Bem vindo(a) a calculadora em JS')
let operador = prompt('Oque deseja fazer:\n+ \n-\n*\n/ \n')
let numero1 = parseInt(prompt('digite o primeiro numero'))
let numero2 = parseInt(prompt('digite o segundo numero'))

let resultado


switch (operador) {

    case '+':
        resultado = numero1 + numero2
        break
    case '-':
        resultado = numero1 - numero2
        break
    case '*':
        resultado = numero1 * numero2
        break
    case '/':
        resultado = numero1 / numero2
        break

    default:
        alert('Nada informado!')
        break
}

alert(`o valor é ${resultado}`)