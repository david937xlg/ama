var atual = new Date()
var diaSemana = atual.getDate()
var atualMes = atual.getMonth()
switch(diaSemana) {
  case 0:
    diaSemana = "Domingo"
    break
  case 1:
    diaSemana = "Segunda"
    break
  case 2:
    diaSemana = "Terça"
    break
  case 3:
    diaSemana = "Quarta"
  case 4:
    diaSemana = "Quinta"
    break
  case 5:
    diaSemana = "Sexta"
    break
   case 6:
     diaSemana= "Sabado"
     break
   default:
     diaSemana  = "Dia invalido"
     break
  
}
switch(atualMes) {
    case 0:
        atualMes = "Janeiro"
        break
    case 1:
        atualMes = "Fevereiro"
        break
    case 2:
        atualMes= "Março" 
        break 
    case 3:
        atualMes = "Abril" 
        break
    case 4:
        atualMes = "Maio" 
        break
    case 5:
        atualMes = "Junho"
        break
    case 6:
        atualMes = "Julho"
        break
    case 7:
        atualMes = "Agosto"
        break
    case 8:
        atualMes = "Setembro"
        break
    case 9:
        atualMes= "Outubro"
        break
    case 10:
        atualMes = "Novembro"
        break
    case 11:
        atualMes = "Dezembro"
        break
    default:
        atualMes= "Invalido!"
}
var diaAtual = atual.getDay()
var anoAtual = atual.getFullYear()
var atulHora = atual.getHours()
var atuaMinu = atual.getMinutes()
var Res = document.querySelector('.text')
Res.innerHTML = `${diaSemana}, ${diaAtual} de ${atualMes} de ${anoAtual} ${atulHora}:${atuaMinu} `

