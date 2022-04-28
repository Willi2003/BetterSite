document.addEventListener('DOMContentLoaded', () => {
    let enterRange = document.querySelector('#enter')
    let enterValue = document.querySelector('#enterValue')

    let randomValue = Math.floor(Math.random() * 100)

    enterRange.addEventListener('input', () => {
        if (enterRange.value == randomValue) {
            alert('You are registered !')
        }

        enterValue.innerHTML = enterRange.value
    })

    let title = document.querySelector('h1')

    title.addEventListener('click', () => {
        title.style.fontSize = "25em"
    })
})