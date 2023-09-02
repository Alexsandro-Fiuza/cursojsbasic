function clicar() {
  var btn1 = document.getElementById("btn1")
  var btn2 = document.getElementById("btn2")
  var btn3 = document.getElementById("btn3")
  var res = document.getElementById("res")
  num1 = Number(btn1.value)
  num2 = Number(btn2.value)
  num3 = Number(btn3.value)

  if (
    btn1.value.length == 0 ||
    btn2.value.length == 0 ||
    btn3.value.length == 0
  ) {
    res.innerHTML = "[⛔ERRO⛔] Está faltando dados!"
  } else {
    res.innerHTML = "Contando: "

    if (num3 <= 0) {
      window.alert("Passo inválido! Considerando passo = 1")

      num3 = 1
    }

    if (num1 < num2) {
      for (var c = num1; c <= num2; c += num3) {
        res.innerHTML += `${c} ➔ `
      }
    } else {
      for (var c = num1; c >= num2; c -= num3) {
        res.innerHTML += `${c} ➔ `
      }
    }
    res.innerHTML += "🏴"
  }
}
