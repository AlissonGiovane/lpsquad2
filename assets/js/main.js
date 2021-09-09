(function() {
  "use strict";


  /**
   * Clica e abre o DropMenu
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * O DropMenu em sí
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

 
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)


     /**
   * Preloader
   */
      let preloader = select('#preloader');
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove()
        });
      } 

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

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
