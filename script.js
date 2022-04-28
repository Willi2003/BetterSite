let buttons = document.querySelectorAll('body>.Buttons>button')
let clickMe = document.querySelector('#click')
let glass = document.querySelector("#glass")

setInterval(() => {
    randomButton = buttons[Math.floor(Math.random() * 1000)]

    randomButton.style.background = 'red'
}, 1000)

clickMe.addEventListener("click", () => {
    alert('WOW GG !')
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
    } else if (glass.style.marginTop > "0") {
        glass.style.marginTop = "0"
    }
}, 100)