function clicar() {
  var num1 = document.getElementById("num1")
  var tab = document.getElementById("tabuada")
  n1 = Number(num1.value)

  if (num1.value.length == 0) {
    window.alert("[ERRO] Insira um numero válido!")
    tab.innerHTML = ''
  } else {
    ntab = 1
    tab.innerHTML = ""
    for (nt = ntab; nt <= 10; nt++) {
      var comptab = document.createElement("option")
      comptab.text = `${n1} x ${nt} = ${n1 * nt}`
      tab.appendChild(comptab)
    }
  }
}