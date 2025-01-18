//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const lista = document.querySelector('#listaAmigos')
const resultado = document.querySelector('#resultado')
const nome = document.querySelector('#amigo')
const amigos = []

function listarAmigos() {
  lista.innerHTML = ''
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li")
    let amigo = document.createTextNode(amigos[i])
    item.appendChild(amigo)
    lista.appendChild(item)
  }
}

function adicionarAmigo() {
  if (nome.value.trim().length <= 0) {
    alert('Digite um nome no campo!')
    return
  }
  amigos.push(nome.value)
  listarAmigos()
}

function sortearAmigo() {
  if (amigos.length <= 0) {
    alert('Cadastre alguns amigos antes de sortear!')
    return
  }

  let numero = Math.floor(Math.random() * amigos.length)
  let amigosSorteado = amigos[numero]
  resultado.innerHTML = ''
  resultado.innerHTML = `<li>${amigosSorteado}</li>`
}