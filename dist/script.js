let numeroSecreto = parseInt(Math.random() * 11)

var gifAcertou = [
  'https://c.tenor.com/Yp5Id0Q6yG0AAAAC/patrick-jane-the-mentalist.gif'
]

var gifErrou = [
  'https://c.tenor.com/1t0B4vddqcQAAAAC/the-mentalist-patrick-jane.gif'
]

function iniciar() {
  document.getElementById('btn-iniciar').disabled = true
  var elemento = document.getElementById('menssagem')
  var menssagem = 'O número ja foi escolhido, digite suas tentativas...'
  elemento.innerHTML = menssagem
  document.getElementById('btn-chutar').disabled = false
  document.getElementById('valor').disabled = false
}

var tentativas = 3
var btn = document.getElementById('btn-chutar')

btn.onclick = function Chutar() {
  tentativas--
  var chute = parseInt(document.getElementById('valor').value)
  parseInt((document.getElementById('valor').value = ''))
  var elementoMenssagem = document.getElementById('resultado')
  var imgAcertou = '<img src=' + gifAcertou + '>'
  var imgErrou = '<img src=' + gifErrou + '>'
  var elemento = document.getElementById('menssagem')
  var menssagem = 'Restam ' + tentativas + ' tentativas'
  var mensErro = ' Suas tentativas terminaram '
  var mensAcertou = 'Acertou!!'

  if (tentativas > 0) {
    if (chute === numeroSecreto) {
      elemento.innerHTML = mensAcertou
      elementoMenssagem.innerHTML =
        'Parabéns você é mesmo um mentalista' + '<br>' + imgAcertou
      document.getElementById('btn-chutar').disabled = true
      document.querySelector('.button-tentar_de-novo').style.display = 'block'
    } else if (chute > 10 || chute < 0) {
      elementoMenssagem.innerHTML = 'Digete números de 0 á 10'
    } else if (chute > numeroSecreto) {
      elementoMenssagem.innerHTML = ' O número escolhido é menor que esse'
      elemento.innerHTML = menssagem
    } else if (chute < numeroSecreto) {
      elementoMenssagem.innerHTML = ' O número escolhido é maior que esse'
      elemento.innerHTML = menssagem
    } else if (!chute) {
      elementoMenssagem.innerHTML = ' Digete algum número'
    }
  } else {
    elemento.innerHTML = mensErro
    elementoMenssagem.innerHTML =
      ' Parece que você não é ' +
      '<br>' +
      'um mentalista' +
      ' O número secreto era ' +
      numeroSecreto +
      imgErrou
    document.getElementById('btn-chutar').disabled = true
    document.querySelector('.button-tentar_de-novo').style.display = 'block'
  }
}

function recarregaPag() {
  window.location.reload(true)
}
