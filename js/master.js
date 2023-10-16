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


startGameBtnDOMElement.addEventListener('click', function (){

    gameGridDOMElement.innerHTML = ''

    let bombe = getRandomArrayOfInts(1,100,MAX_NUMBER_OF_BOMBS)
    console.log (bombe)

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


