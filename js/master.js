gameGridDOMElement = document.querySelector('.game-grid')
// console.log(gameGridDOMElement)

startGameBtnDOMElement = document.getElementById('start-game')
// console.log(startGameBtnDOMElement)

startGameBtnDOMElement.addEventListener('click', function (){

    gameGridDOMElement.innerHTML = ''

    for (let i = 0; i < 100 ; i++) {

        let n = i + 1
        // console.log(n)

        const htmlCell = `<div class="cell">${n}</div>`

        gameGridDOMElement.innerHTML = gameGridDOMElement.innerHTML + htmlCell

    }

    let cellDOMElement = document.querySelectorAll('.cell')

    for (let i = 0 ; i < cellDOMElement.length ; i++ ) {

        let currentCelllElement = cellDOMElement[i]

        currentCelllElement.addEventListener ('click', function() {

            currentCelllElement.classList.add('bg-azure')

            console.log('You Clicked on number:' + currentCelllElement.innerHTML)

        })
    }
})