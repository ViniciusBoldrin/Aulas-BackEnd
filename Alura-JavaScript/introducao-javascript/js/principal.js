var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".pacientes");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

pesoValido = true;
alturaValido = true;

if (peso <= 0 || peso >= 1000) {
  tdPeso.textContent = "Peso inválido";
  pesoValido = false;
  tdIMC.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.0) {
  tdAltura.textContent = "Altura inválida";
  alturaValido = false;
  tdIMC.textContent = "Altura inválida";
}

if (pesoValido && alturaValido) {
  var imc = peso / (altura * altura);
  tdIMC.textContent = imc;
}
