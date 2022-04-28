document.addEventListener('DOMContentLoaded', () => {
    let buttons = [...document.querySelectorAll('body>.Buttons>button')]
    let glass = document.querySelector('#glass')

    setInterval(() => {
        if (typeof randomButton !== 'undefined') {
            let lastButton = randomButton

            lastButton.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        }
        randomButton = buttons[Math.floor(Math.random() * buttons.length) - 1]

        randomButton.style.backgroundColor = 'rgba(0, 0, 0, 0.15)'
    }, 10000)

    let clickMe = document.querySelector('#click')

    clickMe.addEventListener("click", () => {
        console.log('lol')
    })

    setInterval(() => {
        glass = document.querySelector("#glass")
        if (typeof(glass) == 'undefined' || glass == null) {
            let newDiv = document.createElement("div")
            newDiv.setAttribute('id', 'glass')
            document.body.insertBefore(newDiv, clickMe)
        } else if (glass.style.display == "none") {
            glass.style.display = "block"
        } else if (glass.style.position != "absolute") {
            glass.style.position = "absolute"
        } else if (glass.style.margin != "0") {
            glass.style.margin = "0"
        }

        if (glass.style.marginTop != "0") {
            glass.style.marginTop = "0"
        } 

        if (glass.style.marginBottom != "0") {
            glass.style.marginBottom = "0"
        }

        if (glass.style.marginRight != "0") {
            glass.style.marginRight = "0"
        }

        if (glass.style.marginLeft != "0") {
            glass.style.marginLeft = "0"
        }

        if (click.style.zIndex != -100) {
            click.style.zIndex = -100
        } 

        if (glass.style.zIndex != 0) {
            glass.style.zIndex = 0
        }

    }, 100)
})