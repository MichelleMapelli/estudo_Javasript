var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Endrocnologista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = document.querySelector(".info-peso");
var tdAltura = document.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log(imc);
