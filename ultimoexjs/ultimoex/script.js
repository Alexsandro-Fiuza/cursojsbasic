var num = document.getElementById("num1")
var select = document.getElementById("add")
var resul = document.getElementById("res")
var numeros = []

function identifnumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function numberinselect(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  

  if (identifnumber(num.value) && !numberinselect(num.value, numeros)) {
    numeros.push(Number(num.value))

    var item = document.createElement("option")

    item.text = `Valor ${num.value} adicionado`
    select.appendChild(item)
    resul.innerHTML = ''

  } else {
    window.alert('Valor inválido ou ja se encontra na lista.')
  }
  num.value = ''
  num.focus()
}

function final() {
  if (numeros.length == 0){
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = numeros.length
    let maior = numeros[0]
    let menor = numeros[0]
    let somar = 0
    let media = 0

    for (let posic in numeros) {
      somar += numeros[posic]
      if (numeros[posic] > maior) 
        maior = numeros[posic]
      if (numeros[posic] < menor)
        menor = numeros[posic]

    }
    media = somar / tot

    resul.innerHTML = ``
    resul.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados.<p>`
    resul.innerHTML += `<p>O maior número informado é ${maior}.<p>`
    resul.innerHTML += `<p>O menor número informado é ${menor}.<p>`
    resul.innerHTML += `<p>A soma de todos os valores é ${somar}.<p>`
    resul.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2).replace('.', ',')}.<p>`
  }
}
