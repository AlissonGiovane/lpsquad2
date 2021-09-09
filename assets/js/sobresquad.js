
var envioMensagem = document.querySelector("#enviomensagem");

envioMensagem.addEventListener("click", function(event) {
    event.preventDefault();

        var form = document.querySelector("#form-mensagem");
		var dados = obtemMensagem(form);
        form.reset();
    	console.log(dados);
        alert("O e-mail foi enviado com sucesso!");
	});

    function obtemMensagem(form) {
		var dados = {
			nome: form.nome.value,
		    email: form.email.value,
		    telefone: form.telefone.value,
		    mensagem: form.mensagem.value,
		}
		return dados;
	}

