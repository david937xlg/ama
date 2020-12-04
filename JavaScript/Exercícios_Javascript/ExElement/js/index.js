array = [
  {tag : 'p',texto: 'Frase1'},
  {tag : 'div',texto: 'Frase2'},
  {tag : 'footer',texto: 'Frase3'},
  {tag : 'section',texto: 'Frase4'}
]
for (i=0;i<array.length;i++) {
    var res = document.querySelector('.res')
    var tag = document.createElement(array[i].tag)
    var texto = document.createTextNode(array[i].texto)
    tag.appendChild(texto)
    res.appendChild(tag)

}
