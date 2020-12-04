const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')
const body = getComputedStyle(document.body)
const Cor = body.backgroundColor
for (p in ps) {
    ps[p].style.backgroundColor = Cor
    ps[p].style.color = "white"

}
