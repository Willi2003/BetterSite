document.addEventListener('DOMContentLoaded', () => {
    let buttons = [...document.querySelectorAll('body>.Buttons>button')]

    setInterval(() => {
        if (typeof randomButton !== 'undefined') {
            let lastButton = randomButton

            lastButton.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        }
        randomButton = buttons[Math.floor(Math.random() * buttons.length) - 1]

        randomButton.style.backgroundColor = 'rgba(0, 0, 0, 1)'
    }, 1000)

    let clickMe = document.querySelector('#click')

    clickMe.addEventListener("click", () => {
        alert('WOW GG !')
    })
})