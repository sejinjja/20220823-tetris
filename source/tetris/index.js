let pressedKey = ''
let levelFrameRate = 200
let frameRate = 0
let level = 0
let blockList = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 0, 0, 0, 0]],

    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 0, 0, 0]],

    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 0, 0, 0]],

    [[0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0]],

    [[0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0]]
]

let currentX = 4
let currentY = 3

const rotateMap = [
    [[[2, 2], [2, 2]], [[2, 2], [2, 2]]],
    [[[2, 0, 0], [2, 2, 2]], [[0, 2],[0, 2], [ 2, 2]]],
    [[[0, 0, 2], [2, 2, 2]], [[2, 0],[2, 0], [ 2, 2]]],
    [[[2], [2], [2], [2]], [[2, 2, 2, 2]]],
    [[[2], [2], [2], [2]], [[2, 2, 2, 2]]]
]

let isRotate = false


let currentBlock = []
let tetrisBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]
let isPlay = false
function play(event) {
    event.target.blur()
    isPlay = true
    frame()
    frameRateDisplay()
}

function displayLevel() {
    document.getElementById('level').innerHTML = level
}

function reset() {
    level = 1
    levelFrameRate = 200
    tetrisBoard = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
}

function stop() {
    isPlay = false
}

function frameRateDisplay() {
    if(isPlay) {
        setTimeout(() => {
            document.getElementById('frameRate').innerHTML = frameRate
            frameRate = 0
            frameRateDisplay()
        }, 1000)
    }
}

let frameCaller

function frame() {
    if(!checkCurrentBlock()) {
        try {
            initCurrentBlock()
        } catch (e) {
            log('currentBlock : ' + currentBlock)
            log(e.stack)
            isPlay = false
        }
    }
    if(isPlay) {
        render()
        startFrame()
    }
}

function startFrame() {
    if(frameCaller) {
        clearTimeout(frameCaller)
        frameCaller = null
    }
    frameCaller = setTimeout(() => {
        frame()
        // settleBlock()
        frameRate++
    }, levelFrameRate)
}

function initCurrentBlock() {
    currentBlock = getRandomBlock()

    for(let i = 0; i < 4; i++) {
        if(count(tetrisBoard[i], 2) || count(tetrisBoard[i], 1)) {
            throw new Error('game over')
        }
        for(let j = 0; j < tetrisBoard[i].length; j++ ){
            tetrisBoard[i][j] = currentBlock[i][j]
        }
    }
}

function render() {
    const tetrisTable = document.getElementById('tetris')
    tetrisTable.innerHTML = ''

    moveBlock()
    clearRow()
    displayLevel()

    // logClear()
    // log(tetrisBoard)

    for (let i = 4; i < tetrisBoard.length; i++) {
        const row = tetrisBoard[i]

        for(const colum of row) {
            const tetrisColumn = document.createElement('div')
            if(colum === 1) {
                tetrisColumn.classList.add('filled')
            } else if(colum === 2) {
                tetrisColumn.classList.add('move')
            }
            tetrisTable.appendChild(tetrisColumn)
        }
    }
}

function clearRow() {
    let isRemoved = false
    for(let i = 0; i < tetrisBoard.length; i++) {
        if(count(tetrisBoard[i], 1) === tetrisBoard[i].length) {
            tetrisBoard[i] = null
            isRemoved = true
        }
    }
    if(isRemoved) {
        let newTetrisBoard = []
        for(let i = 0; i < tetrisBoard.length; i++) {
            if(tetrisBoard[i]) {
                newTetrisBoard.push(tetrisBoard[i])
            }
        }
        for(let i = tetrisBoard.length - newTetrisBoard.length; i > 0; i--) {
            if(levelFrameRate > 40) {
                levelFrameRate -= 10
                level++
            }
            newTetrisBoard.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        }
        Object.assign(tetrisBoard, newTetrisBoard)
    }
}

function moveBlock() {
    if(pressedKey === 'a') {
        moveLeft()
    } else if(pressedKey === 'd') {
        moveRight()
    }

    if(pressedKey === 's') {
        moveDown()
    } else if(pressedKey === 'w') {
        rotate()
    } else {
        moveDown()
    }
}

function rotate() {
    let isRotatable = true
    const rotateForm =
        rotateMap[blockList.indexOf(currentBlock)][+!isRotate]
    const offsetX = Math.min(
        tetrisBoard[0].length - rotateForm[0].length,
        currentX
    )
    /**
     * [2, 0, 0]
     * [2, 2, 2]
     */
    /**
     * [0, 2]
     * [0, 2]
     * [2, 2]
     */

    for(let i = 0; (i < rotateForm.length) && isRotatable; i++) {
        const y = currentY - i
        for(let j = 0; (j < rotateForm[i].length) && isRotatable; j++) {
            const x = offsetX + j
            if(!tetrisBoard[y]) {
                debugger
            }
            if(tetrisBoard[y][x] === 1) {
                isRotatable = false
            }
        }
    }
    if(isRotatable) {
        settleBlock(true)
        for(let i = 0; i < rotateForm.length; i++) {
            const y = currentY - i
            for(let j = 0; j < rotateForm[i].length; j++) {
                const x = offsetX + j
                if(rotateForm[i][j]) {
                    tetrisBoard[y][x] = 2
                }
            }
        }
        isRotate = !isRotate
        currentX = offsetX
    }
}

function clearCurrentBlock() {

}

function moveDown() {
    let collision = false
    for (let i = tetrisBoard.length - 1; i >= 1; i--) {
        const upRow = tetrisBoard[i - 1]
        const downRow = tetrisBoard[i]
        for(let j = 0; j < tetrisBoard[i].length; j++) {
            let newCol = upRow[j] | downRow[j]
            if(newCol === 3) {
                collision = true
            }
        }
        if(collision) {
            break
        }
    }

    const bottomLine = tetrisBoard[tetrisBoard.length - 1]
    for(let i = 0; i < bottomLine.length; i++) {
        if(bottomLine[i] === 2) {
            collision = true
        }
    }
    if(collision) {
        settleBlock()
    } else {
        for (let i = tetrisBoard.length - 1; i >= 1; i--) {
            const upRow = tetrisBoard[i - 1]
            const downRow = tetrisBoard[i]
            for(let j = 0; j < tetrisBoard[i].length; j++) {
                let newCol = upRow[j] | downRow[j]
                if (newCol === 2) {
                    downRow[j] = newCol
                }
                if(upRow[j] === 2) {
                    upRow[j] = 0
                }
            }
        }
        currentY++
    }
}

function moveLeft() {
    if(count(tetrisBoard[3], 2)) {
        return
    }

    let collision = false
    for(const row of tetrisBoard) {
        for(let i = 0; !collision && i < row.length - 1; i++) {
            if(row[i] === 2) {
                if(row[i - 1] !== 0) {
                    collision = true
                }
                break
            }
        }
        if(collision) {
            break
        }
    }

    if(!collision) {
        currentX--
        for(const row of tetrisBoard) {
            for(let i = 0; i < row.length; i++) {
                if(row[i] === 2) {
                    row[i - 1] = 2
                    row[i] = 0
                }
            }
        }
    }
}

function moveRight() {
    if(count(tetrisBoard[3], 2)) {
        return
    }

    let collision = false
    for(const row of tetrisBoard) {
        for(let i = row.length - 1; !collision && i >= 0; i--) {
            if(row[i] === 2) {
                if(row[i + 1] !== 0) {
                    collision = true
                }
                break
            }
        }
        if(collision) {
            break
        }
    }

    if(!collision) {
        currentX++
        for(const row of tetrisBoard) {
            for(let i = row.length - 1; !collision && i >= 0; i--) {
                if(row[i] === 2) {
                    row[i + 1] = 2
                    row[i] = 0
                }
            }
        }
    }
}

function settleBlock(isClear) {
    for (let i = 0; i < tetrisBoard.length; i++) {
        for(let j = 0; j < tetrisBoard[i].length; j++) {
            if(tetrisBoard[i][j] === 2) {
                tetrisBoard[i][j] = +!isClear
            }
        }
    }
}

function newRow() {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}


document.addEventListener('DOMContentLoaded', render)

document.addEventListener('keypress', ({key}) => {
    if(key.toLowerCase() !== 'w') {
        pressedKey = key.toLowerCase()
    }
    setTimeout(() => {
        render()
        startFrame()
    }, 40)
})

// document.addEventListener('keydown', event => {
//     pressedKey = event.key
// })

document.addEventListener('keyup', ({key}) => {
    pressedKey = ''
    if(key.toLowerCase() === 'w') {
        pressedKey = 'w'
        setTimeout(() => {
            render()
            pressedKey = ''
        }, 0)
    }
    setTimeout(() => {
        render()
        startFrame()
    }, 40)
})

function getRandomBlock() {
    isRotate = false
    currentX = 4
    currentY = 3
    return blockList[Math.floor(Math.random() * blockList.length)]
}

function checkCurrentBlock() {
    return !!countSquare(tetrisBoard, 2)
}

function isInCurrentBlock() {
    return !currentBlock.length || countSquare(currentBlock, 2) === countSquare(tetrisBoard, 2)
}
function count(arr, value) {
    let count = 0

    for(const colum of arr) {
        if(colum === value) {
            count++
        }
    }
    return count
}

function logClear() {
    document.getElementById('log').innerHTML = ''
}

function log(message) {
    const div = document.createElement('div')
    div.innerText = message
    document.getElementById('log').prepend(div)
}

function countSquare(arr, value) {
    let count = 0

    for(const row of arr) {
        for(const colum of row) {
            if(colum === value) {
                count++
            }
        }
    }
    return count
}
