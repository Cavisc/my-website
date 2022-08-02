const nome = {
  el: document.getElementById('nome'),
  span: document.getElementById('1')
}

const email = {
  el: document.getElementById('email'),
  span: document.getElementById('2')
}

const assunto = {
  el: document.getElementById('assunto'),
  span: document.getElementById('3')
}

const mensagem = {
  el: document.getElementById('mensagem'),
  span: document.getElementById('4')
}

const botao = document.getElementById('botao')

botao.addEventListener('click', e => {
  valida(nome)
  valida(assunto)
  validaEmail()
  valida(mensagem)
})

function valida(campo) {
  if (campo.el.value == '') {
    campo.el.classList.add('invalido')
    campo.span.style.opacity = 1
  } else {
    campo.el.classList.add('valido')
    campo.span.style.opacity = 0
    if (
      nome.el.classList.contains('valido') &&
      email.el.classList.contains('valido') &&
      assunto.el.classList.contains('valido') &&
      mensagem.el.classList.contains('valido')
    ) {
      apaga()
    }
  }
}

function validaEmail() {
  if (!email.el.value.includes('@' && '.com')) {
    email.el.classList.add('invalido')
    email.span.style.opacity = 1
  } else if (email.value == '') {
    email.el.classList.add('invalido')
    email.span.style.opacity = 1
  } else {
    email.el.classList.add('valido')
    email.span.style.opacity = 0
  }
}

function apaga() {
  setTimeout(function () {
    nome.el.classList.remove('valido')
    nome.el.value = ''
    email.el.classList.remove('valido')
    email.el.value = ''
    assunto.el.classList.remove('valido')
    assunto.el.value = ''
    mensagem.el.classList.remove('valido')
    mensagem.el.value = ''
  }, 2000)
}

nome.el.addEventListener('focus', e => {
  nome.el.classList.remove('invalido')
  nome.el.classList.remove('valido')
  nome.span.style.opacity = 0
})

email.el.addEventListener('focus', e => {
  email.el.classList.remove('invalido')
  email.el.classList.remove('valido')
  email.span.style.opacity = 0
})

assunto.el.addEventListener('focus', e => {
  assunto.el.classList.remove('invalido')
  assunto.el.classList.remove('valido')
  assunto.span.style.opacity = 0
})

mensagem.el.addEventListener('focus', e => {
  mensagem.el.classList.remove('invalido')
  mensagem.el.classList.remove('valido')
  mensagem.span.style.opacity = 0
})

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '5px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .apresentacao__saudacao, #home .apresentacao__descricao, #home .apresentacao__redes, #home .apresentacao__foto,
  #sobre-mim .sobre-mim__titulo, #sobre-mim .sobre-mim__texto,
  #skills .skills__titulo, #skills .skills__card,
  #hobbies .hobbies__titulo, #hobbies .hobbies__card,
  #formacao .formacao__titulo, #formacao .formacao__card,
  #experiencia .experiencia__titulo, #experiencia .experiencia__video, #experiencia .experiencia__info,
  #contato .contato__image, #contato .contato__informacoes,
  #rodape
  `,
  { interval: 100 }
)

function voltaParaTopo() {
  const botaoVoltaParaTopo = document.querySelector('.volta-topo')

  if (window.scrollY >= 300) {
    botaoVoltaParaTopo.classList.add('mostra')
  } else {
    botaoVoltaParaTopo.classList.remove('mostra')
  }
}

window.addEventListener('scroll', function () {
  voltaParaTopo()
})
