function validate(){
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var mensagem_de_erro = document.getElementById("mensagem_de_erro");
    
    mensagem_de_erro.style.padding = "10px";
    
    var texto;
    if(nome.length < 5){
      texto = "Coloque um nome válido";
      mensagem_de_erro.innerHTML = texto;
      return false;
    }
    if(isNaN(telefone) || telefone.length < 10){
      texto = "Por favor coloque um número válido";
      mensagem_de_erro.innerHTML = texto;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      texto = "Por favor coloque um email válido";
      mensagem_de_erro.innerHTML = texto;
      return false;
    }
    if(mensagem.length <= 10){
      texto = "Por favor coloque uma mensagem com mais de 10 caracteres";
      mensagem_de_erro.innerHTML = texto;
      return false;
    }
    alert("Formulário enviado com sucesso!");
    return true;
  }
