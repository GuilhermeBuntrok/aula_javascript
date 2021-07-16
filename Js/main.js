function clicou() {
  document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>";
  //  document.getElementById("agradecimento");
  //alert("Obrigado por clicar")
}
function redireciona() {
  // window.open("https://www.youtube.com/");
  window.location.href = "https://www.youtube.com";
}

function load() {
  alert("Pagina carregada")
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}

function trocar(elemento) {
  //document.getElementById("mousemover").innerHTML = "Obrigado por passar mouse";
  // alert("Troca texto.");
  elemento.innerHTML = "Obrigado  por passar mouse";
}
function voltar(elemento) {
  elemento.innerHTML = "passe o mouse";
  // document.getElementById("mousemover").innerHTML = "Passe o mouse";
}
/*
function soma(n1, n2) {
  return n1 + n2;
}
var validar = 0;

function validaIdade(idade) {

  if (idade >= 18) {
    validar = true;
  } else {
    return false;
  }
  return validar;
}
var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);

/*
var d = new Date();
alert(d.getMonth() + 1);
alert(d.getDate());
*/
/*
var count;
for (count = 0; count <= 5; count++) {
  alert(count);
};
*/
/*
var count = 0;
while (count < 5) {
  console.log(count);
  alert(count);
  count++;
};
*/
/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
  alert("Maior de idade");

} else {
  alert("Menor de idade");
};
/*
/*
var fruta = [{ nome: "Maça", cor: "vermelha" }, { nome: "Uva", cor: "roxo" }]
console.log(fruta.nome);
alert(fruta[1].nome);
/*
var nome = "Guilherme M Buntrok";
var idade = 24;
var idade2 = 10
var frase = "Japão e o melhor time do mundo";
console.log(frase.replace("Japão", "Alemanha"));
console.log(frase.toUpperCase);
alert(frase);

var lista = ["maça", "pêra", "laranja"];
// Adiciona na lista.push("banana");
// remove ultimo item da lista.pop();
console.log(lista[1]);
// ver tamanho da lista console.log(lista.length);
// transforma a lista em string console.log(lista.toString());
//alert(lista[1])
// transforma e separa com algum caractere console.log(lista.join(" - "));
alert(lista);
*/