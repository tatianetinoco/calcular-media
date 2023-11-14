function calcularMedia(){
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  var nota5 = parseFloat(document.getElementById("nota5").value);
  media(nota1, nota2, nota3, nota4, nota5)
}

function media(nota1, nota2, nota3, nota4, nota5){
  var media = ((Number(nota1)+Number(nota2)+Number(nota3)+Number(nota4)+Number(nota5))/5).toFixed(2);
 alert(`A Média Das Notas ${nota1}, ${nota2}, ${nota3}, ${nota4} e ${nota5} é: ${media}`)
}

function limpar() {
	document.getElementById('nota1').value = "";
	document.getElementById('nota2').value = "";
	document.getElementById('nota3').value = "";
  document.getElementById('nota4').value = "";
  document.getElementById('nota5').value = "";
}