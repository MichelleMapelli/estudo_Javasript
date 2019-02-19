var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Endrocnologista";

var pacientes = document.querySelectorAll(".paciente");

//Loop para conseguir passar informações de IMC a todos os pacientes
for (var i = 0; i < pacientes.length; i++) {
    //Colocando o array dentro de uma variável
    var paciente = pacientes[i];

    //Foram criadas 3 variaveis, que recebem da tabela peso e altura, e o text.content a transforma em dados
    var tdPeso = paciente.querySelector(".info-peso").textContent;
    var tdAltura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (tdPeso <= 0 || tdPeso >= 500) {
        pesoEhValido = false;
        tdImc.textContent = "Peso é inválido!";
        //classList pega o style direto do arquivo CSS 
        paciente.classList.add("paciente-invalido");

    }
    if (tdAltura <= 0 || tdAltura >= 3) {
        alturaEhValida = false;
        tdImc.textContent = "Altura é inválida!";
        paciente.classList.add("paciente-invalido");

    }
    if (pesoEhValido && alturaEhValida) {
        var imc = tdPeso / (tdAltura * tdAltura);
        tdImc.textContent = imc.toFixed(2);
    }

}
// Adicionando ação ao botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
});


//------------------------------------------------------------------------------------------
titulo.addEventListener("click", mostrarMensagem);

//Exemplo de função nomeada
function mostrarMensagem() {
    console.log("Olá eu fui clicado");
}

//------------------------------------------------------------------------------------------
var segundoTitulo = document.querySelector(".titulo-tabela");

//Exemplo de função anônima
segundoTitulo.addEventListener("click", function() {
    console.log("Eu fui clicado também");
});
