// CLICK SULL'ICONA

const slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

let slideAttiva = 0

let leftArrow = document.querySelector('.left-arrow')
let rightArrow = document.querySelector('.right-arrow')

console.log(leftArrow, rightArrow)

rightArrow.addEventListener('click', function () {

    // Rimuovere classe active
    let slideCorrente = slideElements[slideAttiva]
    slideCorrente.classList.remove('active')

    slideAttiva += 1

    // Aggiungere classe active
    let slideSuccessiva = slideElements[slideAttiva]
    slideSuccessiva.classList.add('active')
})

leftArrow.addEventListener('click', function () {
    // Rimuovere classe active
    let slideCorrente = slideElements[slideAttiva]
    slideCorrente.classList.remove('active')

    slideAttiva -= 1

    // Aggiungere classe active
    let slideSuccessiva = slideElements[slideAttiva]
    slideSuccessiva.classList.add('active')
})