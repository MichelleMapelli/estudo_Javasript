var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Endrocnologista";

var pacientes = document.querySelectorAll(".paciente");

//Loop para conseguir passar informações de IMC a todos os pacientes
for (var i = 0; i < pacientes.length; i++) {
    //Colocando o array dentro de uma variável
    var paciente = pacientes[i];

    //Foram criadas 3 variaveis, que recebem da tabela peso e altura, e o text.content a transforma em dados
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");



    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 500) {
        pesoEhValido = false;
        tdImc.textContent = "Peso é inválido!";
        //classList pega o style direto do arquivo CSS 
        paciente.classList.add("paciente-invalido");

    }
    if (altura <= 0 || altura >= 3) {
        alturaEhValida = false;
        tdImc.textContent = "Altura é inválida!";
        paciente.classList.add("paciente-invalido");

    }
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

    function calculaImc(peso, altura) {
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }

}


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
