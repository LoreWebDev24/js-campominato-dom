// COSTANTI K:

const MAX_NUMBER_OF_BOMBS = 16;

// FUNCTIONS AND COMPONENTS OF FUNCTIONS :

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min) 
}

function getRandomArrayOfInts (minRange, maxRange, number) { 
    const bombArray = []

    while (bombArray.length < number) {
        const n = getRandomIntInclusive(minRange,maxRange)

        if (!bombArray.includes(n)) {
            bombArray.push(n)
        }
    }

    return bombArray
}

// APP JS :

gameGridDOMElement = document.querySelector('.game-grid')
// console.log(gameGridDOMElement)

startGameBtnDOMElement = document.getElementById('start-game')
// console.log(startGameBtnDOMElement)

messageLoseDOMElement = document.querySelector('.message-lose')

messageWinDOMElement = document.querySelector('.message-win')

counterDOMElement = document.getElementById('counter')



startGameBtnDOMElement.addEventListener('click', function (){

    let counter = 0

    gameGridDOMElement.innerHTML = ''

    let bombe = getRandomArrayOfInts(1,100,MAX_NUMBER_OF_BOMBS)
    // console.log (bombe)

    for (let i = 0; i < 100 ; i++) {

        let n = i + 1
        // console.log(n)

        const htmlCell = `<div class="cell">${n}</div>`

        gameGridDOMElement.innerHTML = gameGridDOMElement.innerHTML + htmlCell

    }

    let cellDOMElement = document.querySelectorAll('.cell')

    for (let i = 0 ; i < cellDOMElement.length ; i++ ) {

        let currentCelllElement = cellDOMElement[i]

        currentCelllElement.addEventListener ('click', function(event) {
            const target = event.target;
            // console.log(target.classList.contains('bg-azure'));

            console.log('You Clicked on number:' + currentCelllElement.innerHTML)

            if (target.classList.contains('bg-azure')) {
                counter = counter 
                // console.log (counter)
            } else {
                counter = counter + 1 
            }

            counterDOMElement.innerHTML = " " + counter

            let cellNumber = parseInt(currentCelllElement.innerHTML)

            if (bombe.includes(cellNumber)) {
                currentCelllElement.classList.add('bg-red')
                gameGridDOMElement.classList.add('cursor-none')
                messageLoseDOMElement.classList.add('d-block')
            }
            else {
                currentCelllElement.classList.add('bg-azure')
            }

            if (counter === 84) {
                gameGridDOMElement.classList.add('cursor-none')
                messageWinDOMElement.classList.add('d-block')
            }
            
        })
    }
})


