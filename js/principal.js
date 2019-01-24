var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Endrocnologista";

var pacientes = document.querySelectorAll(".paciente");

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
    }
    if (tdAltura <= 0 || tdAltura >= 3) {
        alturaEhValida = false;
        tdImc.textContent = "Altura é inválida!";
    }
    if (pesoEhValido && alturaEhValida) {
        var imc = tdPeso / (tdAltura * tdAltura);
        tdImc.textContent = imc.toFixed(2);
    }

}
