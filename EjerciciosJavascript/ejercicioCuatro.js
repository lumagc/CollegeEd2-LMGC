let palabra = "sucedeu";
let cadena = palabra.toLowerCase();
let letraRepetida = [];

for (let index = 0; index < cadena.length; index++) {
    for (let j = index+1; j < cadena.length; j++) {
        if(cadena[index]===cadena[j]){
            letraRepetida.push(cadena[index]);
        }
    }
}

function eliminaDuplicados(lista){
    const dataArr = new Set(lista);
    let result = [...dataArr];
    return result;
}

if(letraRepetida.length!=0){
    let lista = eliminaDuplicados(letraRepetida);

    for (let k = 0; k < cadena.length; k++) {
        lista.forEach(repetido => {
            if(cadena[k]===repetido){
                cadena = cadena.replace(cadena[k], ")");
            }
        });
    }
    for (let i = 0; i < cadena.length; i++) {
        const element = cadena[i];
        console.log(element);
        if (cadena[i]!=")") {
            cadena = cadena.replace(cadena[i], "(")
        }
    }
    console.log("Final: "+ cadena);
}
else{
    for (let l = 0; l < cadena.length; l++) {
        cadena = cadena.replace(cadena[l], "(");
    }
    console.log("Final: "+cadena);
}

