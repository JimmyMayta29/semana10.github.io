// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla. 

function sumar(a, b) {
    // Para sumar los argumentos
    let resultado = a + b;

    console.log("El resultado de la suma es:", resultado);
}

sumar(6, 5);


// 2. Verificar si un número es par o impar. 

function verificarParidad(number) {
    if (number % 2 === 0) {
        console.log(number + " es un número par.");
    } else {
        console.log(number + " es un número impar.");
    }
}

verificarParidad(7);  
verificarParidad(4);  


// 3. Calcular el mayor de tres números. 

function mayorDeTres(num1, num2, num3) {
    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    console.log(`El mayor de los tres números es: ${mayor}`);
}

mayorDeTres(5, 8, 3);


// 4. Un estudiante realiza 4 exámenes, calcular el promedio de estos. 

function promedioExamenes(ex1, ex2, ex3, ex4) {
    let promedio = (ex1 + ex2 + ex3 + ex4) / 4;
    console.log(`El promedio de los exámenes es: ${promedio}`);
}

promedioExamenes(85, 90, 78, 92); 

// 5.  Calcular el área de un rectángulo. 

function areaRectangulo(base, altura) {
    let area = base * altura;
    console.log(`El área del rectángulo es: ${area}`);
}

areaRectangulo(5, 10); 


// 6. Calcular el área de un triángulo. 

function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    console.log(`El área del triángulo es: ${area}`);
}

areaTriangulo(6, 8); 

// 7. Calcular el área de una circunferencia

function areaCircunferencia(radio) {
    const pi = 3.14;
    let area = pi * radio * radio;
    console.log(`El área de la circunferencia es: ${area}`);
}

areaCircunferencia(7); 


// 8. Determinar si un número es positivo, negativo o cero

function determinarSigno(numero) {
    if (numero > 0) {
        console.log(`${numero} es positivo`);
    } else if (numero < 0) {
        console.log(`${numero} es negativo`);
    } else {
        console.log(`${numero} es cero`);
    }
}

determinarSigno(-3); 

// 9. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales. 

function menorDeDos(num1, num2) {
    if (num1 < num2) {
        console.log(`${num1} es menor que ${num2}`);
    } else {
        console.log(`${num2} es menor que ${num1}`);
    }
}

menorDeDos(7, 4); 


// 10. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no es divisible entre 2”. 

function esDivisibleEntreDos(numero) {
    if (numero % 2 === 0) {
        console.log(`${numero} es divisible entre 2`);
    } else {
        console.log(`${numero} no es divisible entre 2`);
    }
}

esDivisibleEntreDos(10); 


// 11. Verificar si un día es fin de semana o día laborable. 

function verificarDia(dia) {
    const diasLaborables = ["lunes", "martes", "miércoles", "jueves", "viernes"];
    const diasFinDeSemana = ["sábado", "domingo"];

    if (diasLaborables.includes(dia.toLowerCase())) {
        console.log(`${dia} es un día laborable`);
    } else if (diasFinDeSemana.includes(dia.toLowerCase())) {
        console.log(`${dia} es fin de semana`);
    } else {
        console.log("Día no válido");
    }
}

verificarDia("sábado"); 


// 12.  Verificar si un número es divisible por 3 y por 5. 

function divisiblePor3y5(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(`${numero} es divisible por 3 y por 5`);
    } else {
        console.log(`${numero} no es divisible por 3 y por 5`);
    }
}

divisiblePor3y5(15); 


// 13. Determinar si un número es múltiplo de 2, 3 o ambos. 

function esMultiplo(numero) {
    if (numero % 2 === 0 && numero % 3 === 0) {
        console.log(`${numero} es múltiplo de 2 y de 3`);
    } else if (numero % 2 === 0) {
        console.log(`${numero} es múltiplo de 2`);
    } else if (numero % 3 === 0) {
        console.log(`${numero} es múltiplo de 3`);
    } else {
        console.log(`${numero} no es múltiplo de 2 ni de 3`);
    }
}

esMultiplo(12); 


// 14. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. 

function calcularEdad(añoNacimiento) {
    const añoActual = new Date().getFullYear();
    let edad = añoActual - añoNacimiento;
    console.log(`La edad de la persona es: ${edad}`);
}

calcularEdad(1990); 


// 15. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, que permita determinar el bono que recibirá un trabajador. 

function calcularBono(años) {
    let bono;
    if (años <= 5) {
        bono = años * 100;
    } else {
        bono = 1000;
    }
    console.log(`El bono para ${años} años de antigüedad es: $${bono}`);
}

calcularBono(4); 

// 16. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones.

function puedeVotar(edad) {
    if (edad >= 18) {
        console.log("La persona puede votar");
    } else {
        console.log("La persona no puede votar");
    }
}

puedeVotar(20); 


