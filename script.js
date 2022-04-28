let buttons = document.querySelectorAll('body>.Buttons>button')

setInterval(() => {
    randomButton = buttons[Math.floor(Math.random() * 1000)]

    randomButton.style.background = 'red'
}, 1000)

let clickMe = document.querySelector('#click')

clickMe.addEventListener("click", () => {
    alert('WOW GG !')
})