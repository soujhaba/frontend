function enviar() {
	var nome = document.getElementById("txt-nome");
	//se o valor da variavel for diferente de vazio
	if (nome.value != "") {
	//mostrar mensagem com nome
	alert("obrigado " + nome.value + ", mas está em desenvolvimento");
	}else{
	//mensagem genérica
	alert("obrigado " + nome.value + ", mas você tem que preencher o formulário");
	}
}


