let moveSize = 0

let moveGoSideLeft = 0

let testElement = document.getElementById('test')

let buttonStart = document.getElementById('button_start')
let buttonStop = document.getElementById('button_stop')
let buttonReset = document.getElementById('button_reset')
let buttonGoLeft = document.getElementById('button_goleft')
let buttonGoRight = document.getElementById('button_goright')
let buttonGoUp = document.getElementById('button_goup')
let buttonGoDown = document.getElementById('button_gobottom')

let timerId


// Функция, которая двигает наш квадрат вправо (Занятие)

 function move() {                             
    let width = window.innerWidth - 50
    if (moveSize < width) {
        testElement.style.marginLeft = moveSize + 'px'
        moveSize = moveSize + 3
        timerId = setTimeout(move, 50) // 1s = 1000ms

    } else {
        stop()
    }
}



// ! ======================== Tasks 5 - 6


// Функция, которая двигает наш квадрат влево
// до нулевого марджина (Мне кажется это (я)тупой костыль или всё верно?)

function moveLeft() {
    if (testElement.style.marginLeft > 0 + 'px') {
        testElement.style.marginLeft = moveSize + 'px'
        moveSize = moveSize - 3
        timerId = setTimeout(moveLeft, 50)         
    } else {
        stop()
    }
}

// Функция которая останавливает все действия, очищает интервал,
// Убирает дизейбл кнопку на  стопе и подключает функция двигать влево

function moveGoLeft() {
    stop()
    clearTimeout(timerId)
    buttonDateStart.setAttribute('disabled', 'true')
    buttonStop.removeAttribute('disabled')
    moveLeft()
}




// Функция, которая двигает наш квадрат вниз

function moveBottom() {
    let height = window.innerHeight - 50
    if (moveSize < height) {
        testElement.style.marginTop = moveSize + 'px'
        moveSize = moveSize + 3
        timerId = setTimeout(moveBottom, 50)
    }
    else {
        stop()
    }
}

// Убирает дизейбл кнопку на  стопе и подключает функция двигать вниз

function moveGoBottom() {
    stop()
    clearTimeout(timerId)
    buttonDateStart.setAttribute('disabled', 'true')
    buttonStop.removeAttribute('disabled')
    moveBottom()
}


// Функция, которая двигает наш квадрат вверх
// ! Мне кажется это (я)тупой костыль или норм способ?)

function moveUp() {
    let marginTop = testElement.style.marginTop + 'px'

    if (marginTop > 0 + 'px') {
        testElement.style.marginTop = moveSize + 'px'
        moveSize = moveSize - 3
        timerId = setTimeout(moveUp, 50)
    }
    else {
        stop()
    }
}

// Убирает дизейбл кнопку на  стопе и подключает функция двигать вверх

function moveGoUp() {
    stop()
    clearTimeout(timerId)
    buttonStop.removeAttribute('disabled')
    buttonDateStart.setAttribute('disabled', 'true')
    moveUp()
}



// Функция дизейблит после старта кнопку старт, активирует кнопку стоп

function start() {
    buttonStart.setAttribute('disabled', 'true')
    buttonStop.removeAttribute('disabled')
    clearTimeout(timerId)
    move()
}

// Функция дизейблит после старта кнопку стоп, активирует кнопку старт


function stop() {
    buttonStart.removeAttribute('disabled')
    buttonStop.setAttribute('disabled', 'true')
    clearTimeout(timerId)
}

// Сбрасывает все значения в исходное

function reset() {
    stop()
    moveSize = 0
    testElement.style.marginLeft = moveSize + 'px'
    testElement.style.marginTop = moveSize + 'px'
    testElement.style.marginBottom = moveSize + 'px'
    testElement.style.marginRight = moveSize + 'px'
}


// Привязка кликов на кнопки

buttonStart.onclick = start
buttonStop.onclick = stop 
buttonReset.onclick = reset
buttonGoLeft.onclick = moveGoLeft
buttonGoRight.onclick = start
buttonGoDown.onclick = moveGoBottom
buttonGoUp.onclick = moveGoUp


// ! ======================== Tasks 1 - 4

// *Находим наш span по ID

let htmlDate = document.getElementById('today')  

let time            // создаём переменную time для помещения в неё функции new Date
let timeId         // создаем переменную для получения вэлью от функции задержки



// *Создаем Функцию для вызова Date и поиска span текста, запускаем таймер

function timeStart() {      
    time = new Date()
    htmlDate.innerText = time
    timeId = setTimeout(timeStart, 1000)
}
// *timeStart() - тест


// *Задаем переменные для кнопок и цветного блока

let buttonDateStart = document.getElementById('button_timestart')
let buttonDateStop = document.getElementById('button_timestop')
let blockColor = document.getElementById('blockcolor')

// *Создаем функцию для кнопок и блока, чтобы потом привязать их на click

function startDate() {
    buttonDateStart.setAttribute('disabled', 'true') // выключает кнопку старт
    buttonDateStop.removeAttribute('disabled') // удаляет атрибут дизейблед
    buttonDateStart.innerText = 'Выключено' // Меняет текст кнопки старт
    buttonDateStop.innerText = 'Остановить' // Меняет текст кнопки стоп
    blockColor.style.backgroundColor = 'green'  // Устанавливает бг дива
    clearTimeout(timeId)                        // выключает(очищает) заданную задержку
    timeStart()                                 // Запуск ф-ии таймера, необходимо для зацикливания чтобы счетчик постоянно обновлялся
}

function stopDate() {
    buttonDateStart.removeAttribute('disabled') // удаляет атрибут дизейблед
    buttonDateStop.setAttribute('disabled', 'true') // выключает кнопку старт
    buttonDateStart.innerText = 'Включено'  // Меняет текст кнопки старт
    buttonDateStop.innerText = 'Выключено' // Меняет текст кнопки стоп
    blockColor.style.backgroundColor = 'red' // Устанавливает бг дива
    clearTimeout(timeId)                    // выключает(очищает) заданную задержку
}

buttonDateStart.onclick = startDate // привязка к кнопкам наших функций на клик
buttonDateStop.onclick = stopDate



