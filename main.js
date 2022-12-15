const texto = document.getElementById("texto");
const botaoCripto = document.querySelector(".botao__cripto");
const botaoDescripto = document.querySelector(".botao__descripto");
const resultado = document.querySelector(".resultado");
const alerta = document.querySelector(".alerta");

let textoNovo;

botaoCripto.addEventListener("click", () => {
    textoNovo = texto.value.toLowerCase().replaceAll("e", "enter");
    textoNovo = textoNovo.replaceAll("i", "imes");
    textoNovo = textoNovo.replaceAll("a", "ai");
    textoNovo = textoNovo.replaceAll("o", "ober");
    textoNovo = textoNovo.replaceAll("u", "ufat");

    resultado.innerHTML = `
        <div class="resultado__texto">${textoNovo}</div>
        <button class="resultado__botao" onclick="copiarTexto()">Copiar</button>
    `
})

botaoDescripto.addEventListener("click", () => {
    textoNovo = texto.value.toLowerCase().replaceAll("enter", "e");
    textoNovo = textoNovo.replaceAll("imes", "i");
    textoNovo = textoNovo.replaceAll("ai", "a");
    textoNovo = textoNovo.replaceAll("ober", "o");
    textoNovo = textoNovo.replaceAll("ufat", "u");

    resultado.innerHTML = `
        <div class="resultado__texto">${textoNovo}</div>
        <button class="resultado__botao" onclick="copiarTexto()">Copiar</button>
    `    
})

function copiarTexto() {
    navigator.clipboard.writeText(textoNovo)

    alerta.classList.add("alerta--ativo")

    setTimeout(() => {
        alerta.classList.remove("alerta--ativo")
    }, 1500)
}
