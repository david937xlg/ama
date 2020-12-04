let res = document.getElementById('msg')
let peso = document.getElementById('peso')
let altura = document.getElementById('text2')


function QuebrarLinha() {
  res.innerHTML += `<br>`
}
function Calcular () {
  let num2 = peso.value
  let num = altura.value
  if (num.length == 0 || num < 1 || num > 2.51) {
    res.style.backgroundColor = '#DC143C'
    res.innerText = `Erro, altura invalida!`
    console.log(`Erro, altura invalida!`)
  }else if (num2 == 0 || num2 > 500) {
    res.style.backgroundColor = '#DC143C'
    res.innerText = `Erro, peso inválido! `
    console.log(`Erro, peso inválido!`)
  }else {
    res.style.backgroundColor = '#00FA9A'
    let imc = num2 / (num ** 2)
    var im = imc.toFixed(2)
    QuebrarLinha()
    if (imc < 18.5) {
      res.innerHTML = `<p>O seu imc é ${im} (Voce esta abaixo do peso!)</p> `
      console.log(`O seu imc é ${im} (Você está abaixo do peso) `)
    }else if (imc >= 18.5 && imc < 25) {
      res.innerHTML = `<p>O seu imc é ${im} (Peso normal)</p> `
      console.log(`O seu imc é ${im} (Peso normal) `)
    }else if (imc >= 25  && imc < 30) {
      res.innerHTML = `<p>O seu imc é ${im} (Voce está na faixa de sobrepeso!)</p>`
      console.log(`O seu imc é ${im} (Você está na faixa de sobrepeso) `)
    }else if (imc >= 30 && imc < 35) {
        res.innerHTML = `<p>O seu imc é ${im} (Você está na faixa de obesidade grau 1) </p> `
        console.log(`O seu imc é ${im} (Você está na faixa de Obesidade grau 1) `)
    }else if (imc >= 35  && imc < 40) {
      res.innerHTML = `<p>O seu imc é ${im} (Voce esta na faixa de obesidade grau 2) </p>`
      console.log(`O seu imc é ${im} (Você está na faixa de obesidade grau 2) `)
    }else if (imc > 40) {
      res.innerHTML = `<p>O seu imc é ${im} (Obesidade grau 3)</p>`
      console.log(`O seu imc é ${im} (obesidade grau 3)`)
  }
  }
  }
