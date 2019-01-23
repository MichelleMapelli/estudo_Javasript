var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Endrocnologista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso").textContent;
var tdAltura = paciente.querySelector(".info-altura").textContent;

//Criação de variável que pega a coluna imc do html
var tdImc = paciente.querySelector(".info-imc");

//Cálculo de IMC
var imc = tdPeso / (tdAltura * tdAltura);

//Variável tdImc recebe o resultado do cálculo IMC
tdImc.textContent = imc;
