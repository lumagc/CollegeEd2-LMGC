const juntar = (lista) => {
    frase = [];
    frase = lista.join(" ");
    return frase;
}

let cadenas = ["Hola", "como", "esta", "todo", "el", "mundo"];

console.log(juntar(cadenas));