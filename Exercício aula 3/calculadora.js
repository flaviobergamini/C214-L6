const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {

    soma(num1, num2){
        const validateNum = validate({num1, num2}, CalculadoraConstraint.calculadoraConstraint);
        if(validateNum !== undefined){
            return 'Error';
        }
        return num1 + num2;
    },

    subtrai(num1, num2){
        const validateNum = validate({num1, num2}, CalculadoraConstraint.calculadoraConstraint);
        if(validateNum !== undefined){
            return 'Error';
        }
        return num1-num2;
    },

    multiplica(num1, num2){
        const validateNum = validate({num1, num2}, CalculadoraConstraint.calculadoraConstraint);
        if(validateNum !== undefined){
            return 'Error';
        }
        return num1*num2;
    },

    divide(num1, num2){
        const validateNum = validate({num1, num2}, CalculadoraConstraint.calculadoraConstraint);
        if(validateNum !== undefined){
            return 'Error';
        }

        if (num2 == 0){
            return "Erro: Denominador = 0"
        }
        return num1/num2;
    },

    aoQuadrado(num){
        const validateNum = validate({num}, CalculadoraConstraint.calculadoraConstraint);
        if(validateNum !== undefined){
            return 'Error';
        }
        return num*num;
    }
};

module.exports = Calculadora;