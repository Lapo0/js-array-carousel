// CLICK SULL'ICONA

const slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

let leftArrow = document.getElementsByClassName('left-arrow')
let rightArrow = document.getElementsByClassName('right-arrow')

console.log(leftArrow, rightArrow)

rightArrow = addEventListener('click', function () {
    console.log('funziona il destro')
})

leftArrow = addEventListener('click', function () {
    console.log('funziona il sinistro')
})