let buttons = document.querySelectorAll('body>.Buttons>button')

setInterval(() => {
    randomButton = buttons[Math.floor(Math.random() * 1000)]

    randomButton.style.backgroundColor = 'rgba(0, 0, 0, 0.15)'
}, 1000)

let clickMe = document.querySelector('#click')

alert('WOW GG !')

document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
})