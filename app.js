//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const amigos = []

function listarAmigos() {

  const lista = document.querySelector('#listaAmigos')
  lista.innerHTML = ''

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li")
    let amigo = document.createTextNode(amigos[i])
    item.appendChild(amigo)
    lista.appendChild(item)
  }
}

function adicionarAmigo() {
  const nome = document.querySelector('#amigo').value
  if (nome.trim().length <= 0) {
    alert('Digite um nome no campo!')
    return
  }
  amigos.push(nome)
  listarAmigos()
}

function sortearAmigo() {
  if (amigos.length <= 0) {
    alert('Cadastre alguns amigos antes de sortear!')
    return
  }

  let numero = Math.floor(Math.random() * amigos.length)
  let amigosSorteado = amigos[numero]
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = `<li>${amigosSorteado}</li>`
}