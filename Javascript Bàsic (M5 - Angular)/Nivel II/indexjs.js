function calculadora(operador,valor1,valor2){
    switch (operador){
        case 'sumar':
            return valor1+valor2;
        case 'restar':
            return valor1-valor2;
        case 'multiplicar':
        return valor1*valor2;
        case 'dividir':
            if (valor2===0){
                return 'Operacion no posible'
            }
            return valor1/valor2
    }

}

var resultado = calculadora ('dividir',10,0)

document.write("El resultado es " + resultado)