function calculadora(operador,valor1,valor2){
    switch (operador){
        case 'sumar':
            return valor1+valor2;
        case 'restar':
            return valor1-valor2;
        case 'multiplicar':
            return valor1*valor2
    }

}

var resultado = calculadora ('sumar',10,8)

document.write("El resultado es " + resultado)