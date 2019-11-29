//Hay que darle tres opciones al usuario: Calculadora normal, Calculadora de peso en otro planeta y Calculadora de promedio de notas
let elegir = prompt("¡Hola, usuario! Elige un tipo de calculadora: \n 1 Es para una calculadora normal \n 2 Es para calcular tú peso en otro planeta \n 3 Es para sacar el promedio de tus notas");
if(elegir == 1)
{
    //VARIABLES PARA LA CALCULADORA NORMAL
    let number1 = Number(prompt("Ingresa un número"));
    let number2 = Number(prompt("Ingresa otro número"));
    let option = prompt("1, Suma. 2, Resta \n 3, Multiplica. 4, Divide");
    if(option)
    {
        switch(option)
    {
        case "1":
            alert(number1 + number2);
        break;
        case "2":
            alert(number1 - number2);
        break;
        case "3":
            alert(number1 * number2);
        break;
        case "4":
            alert(number1 / number2);
        default: 
            console.log("Error no identificado. Intente de nuevo");
    }
    }
}
else if(elegir == 2)
{
    // VARIABLES PARA CALCULAR EL PESO EN OTRO PLANETA
    let peso_final;
    let peso = Number(prompt("¿Cuánto pesas, usuario?"));
    let planeta = prompt("1 es Marte, 2 es Júpiter, 3 es Venus \n 4 es la Luna, 5 es Saturno, 6 es Neptuno");
    // CONSTANTES PARA CALCULAR EL PESO EN OTRO PLANETA
    let g_tierra = 9.8;
    let g_marte = 3.7;
    let g_jupiter = 24.8;
    let g_venus = 8.87;
    let g_luna = 1.62;
    let g_saturno = 10.44;
    let g_neptuno = 11.15;
    if(planeta)
    {
        switch(planeta)
        {
            case "1":
                peso_final = peso * g_marte / g_tierra;
                nombre = "Marte";
                alert("Tú peso en " + nombre + " es de " + peso_final.toFixed(2) +"Kg");
            break;
            case "2":
                peso_final = peso * g_jupiter / g_tierra;
                nombre = "Júpiter";
                alert("Tú peso en " + nombre + " es de " + peso_final.toFixed(2) +"Kg");
            break;
            case "3":
                peso_final = peso * g_venus / g_tierra;
                nombre = "Venus";
                alert("Tú peso en " + nombre + " es de " + peso_final.toFixed(2) +"Kg");
            break;
            case "4":
                peso_final = peso * g_luna / g_tierra;
                nombre = "la Luna";
                alert("Tú peso en " + nombre + " es de " + peso_final.toFixed(2) +"Kg");
            break;
            case "5":
                peso_final = peso * g_saturno / g_tierra;
                nombre = "Saturno";
                alert("Tú peso en " + nombre + " es de " + peso_final.toFixed(2) +"Kg");
            break;
            case "6":
                peso_final = peso * g_neptuno / g_tierra;
                nombre = "Neptuno";
                alert("Tú peso en " + nombre + " es de " + peso_final.toFixed(2) +"Kg");
            break;
            default:
                alert("Ocurrió un error. Intente de nuevo");
                console.log("Intentar de nuevo o Revisar el código");
        }
    }
}
else if(elegir == 3)
{
    let question1 = Number(prompt("¿Cuántas notas tienes?"));
    let question2 = Number([]);
    let promedio = 0;
    for(i = 0; i<question1; i++)
    {
        question2+= Number(prompt("¿Cuales son tus notas?"));
        promedio = question2 / question1; 
    }
    alert("Tú promedio es de " + promedio.toFixed(1));
}
else
{
    alert("Ocurrió un error. Intente de nuevo");
    console.log("Algo salió mal. Revisa el código o Haz otra vez lo que acabas de hacer");
}