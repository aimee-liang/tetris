document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

/* each Tetris shape */
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ]

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        []
    ]

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]

    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]

    const allTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let currentPosition = 4
    let currentRotation = 0

    let randomTetro = Math.floor(Math.random() * allTetrominoes.length)
    let currentTetro = allTetrominoes[randomTetro][currentRotation]

    const draw = () => {
        currentTetro.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }

    const undraw = () => {
        currentTetro.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }

    timerId = setInterval(moveDown, 1000)

    moveDown = () => {
        undraw()
        currentPosition += width
        draw()
    }

    freeze = () => {
        if (currentTetro.some(index => squares[currentPosition + index + width].classList.contains('taken'))){
            currentTetro.forEach(index => squares[currentPosition + index].classList.add('taken'))
            randomTetro
        }
    }

    draw()

})