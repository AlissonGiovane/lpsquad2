
var envioMensagem = document.querySelector("#enviomensagem");

envioMensagem.addEventListener("click", function(event) {
    event.preventDefault();

        var form = document.querySelector("#form-mensagem");
		var dados = obtemMensagem(form);
    	console.log(dados);
	
		/*if (validarFormContato = true) {
        alert("O e-mail foi enviado com sucesso!");
		form.reset();
		}*/
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

	function validarFormContato (){
		var nome = formcontato.nome.value;
		var email = formcontato.email.value;
		var telefone = formcontato.telefone.value;
		var mensagem = formcontato.mensagem.value;

		if(nome == "") {
			alert("Campo nome é obrigatório");
			formcontato.nome.focus();
			return false;
		}

		if(email == "") {
			alert("Campo email é obrigatório");
			formcontato.email.focus();
			return false;
		}

		if(telefone == "") {
			alert("Campo telefone é obrigatório");
			formcontato.telefone.focus();
			return false;
		}

		if(mensagem == "") {
			alert("Campo mensagem é obrigatório");
			formcontato.mensagem.focus();
			return false;
		} 
	}