document.addEventListener('DOMContentLoaded', () => {
    let buttons = [...document.querySelectorAll('body>.Buttons>button')]
    let glass = document.querySelector('#glass')

    let randomButtonInterval
    
    randomButtonInterval = setInterval(() => {
        randomButtonGenerator()
    }, 10000)

    function randomButtonGenerator() {
        if (typeof randomButton !== 'undefined') {
            let lastButton = randomButton

            lastButton.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        }
        randomButton = buttons[Math.floor(Math.random() * buttons.length) - 1]

        randomButton.style.backgroundColor = 'rgba(0, 0, 0, 0.15)'
        randomButton.addEventListener('click', () => {
            accessButton()
        })
    }

    let clickMe = document.querySelector('#click')

    clickMe.addEventListener("click", () => {
        console.log('lol')
    })

    let blockAccess

    function accessButton() {
        clearInterval(blockAccess)
        clearInterval(randomButtonInterval)

        console.log('removed')
    }

    function removeAccessButton() {
        blockAccess = setInterval(() => {
            removeAccess()
            
        }, 100)

        randomButtonInterval = randomButtonInterval = setInterval(() => {
            randomButtonGenerator()
        }, 10000)
    }

    removeAccessButton()
    randomButtonGenerator()

    function removeAccess() {
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

        if (glass.style.top != "0") {
            glass.style.top = "0"
        }

        if (glass.style.bottom != "0") {
            glass.style.bottom = "0"
        }

        if (glass.style.left != "16px") {
            glass.style.left = "16px"
        }

        if (glass.style.right != "16px") {
            glass.style.right = "16px"
        }

        if (clickMe.style.zIndex != 0) {
            clickMe.style.zIndex = 0
        } 

        if (glass.style.zIndex != 10) {
            glass.style.zIndex = 10
        }

        if (document.body.style.padding != "0px") {
            document.body.style.padding = "0px"
        }

        if (clickMe.style.position != "unset") {
            clickMe.style.position = "unset"
        }

        if (clickMe.style.marginTop != "24px") {
            clickMe.style.marginTop = "24px"
        }

        if (clickMe.style.marginBottom != "34px") {
            clickMe.style.marginBottom = "34px"
        }

        if (clickMe.style.marginLeft != "0") {
            clickMe.style.marginLeft = "0"
        }

        if (clickMe.style.marginRight != "0") {
            clickMe.style.marginRight = "0"
        }
    }
})