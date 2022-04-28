let buttons = document.querySelectorAll('body>button')

setInterval(() => {
    randomButton = buttons[Math.floor(Math.random() * 1000)]

    randomButton.style.backgroundColor = 'red'
}, 1000)