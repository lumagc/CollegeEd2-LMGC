const puntuacion = (lista) => {
    let contador = 0;
    lista.forEach(element => {
            if (element[0]=== "¡" && element[element.length-1]==="!") {
                console.log("La frase de exclamacion esta correcta");
                contador++;
            }else if (element[0] === "¿" && element[element.length-1]==="?") {
                console.log("La frase de interrogacion esta correcta");
                contador++;
            }
            else{
                console.log("Frase incompleta");
            }
    });
    return contador;
}

let frase = ["¡Hola Mundo!", "¿Que tal estas?", "¡Genial!"];


console.log("Se han encontrado: "+puntuacion(frase)+ " frases con buena puntuación");