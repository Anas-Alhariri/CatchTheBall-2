import sleep from './utils.js';

class Ball {
  ball = document.createElement('div')
  color = "white"
  stepSpeed = 1

  x = this.ball.offsetLeft
  y = this.ball.offsetTop

  ballWidth = this.ball.clientWidth
  ballHeight = this.ball.clientHeight

  bodyWidth = document.body.clientWidth
  bodyHeight = document.body.clientHeight

  movingRight = true
  movingBottom = true

  intervalID = null

  constructor(x, y, color, stepSpeed, width) {
    this.x = x && x !== 0 || this.randomStartingPosition()
    this.y = y && y !== 0 || this.randomStartingPosition()
    this.color = color || "white"
    this.stepSpeed = stepSpeed != null && stepSpeed != 0 ? stepSpeed : this.generateRandomStepNumber(5)
    this.ballHeight = width || this.ball.clientWidth
    this.ballWidth = width || this.ball.clientHeight

    this.ball.style.width = this.ballWidth + "px"
    this.ball.style.height = this.ballHeight + 'px'

    document.body.style.overflow = "hidden"
  }

  randomStartingPosition() {
    return Math.floor(Math.random() * 1000) + 1
  }

  generateRandomStepNumber(maxNumber = 0) {
    return Math.floor(Math.random() * maxNumber) + 1
  }


  intervalHandler = () => {
    this.bodyWidth = document.body.clientWidth
    this.bodyHeight = document.body.clientHeight

    if (this.movingRight) {
      if (this.stepSpeed && this.stepSpeed != 1 || this.stepSpeed != 0)
        this.x += this.stepSpeed * this.generateRandomStepNumber(3)
      else
        this.x = this.x + 1
    } else {
      if (this.stepSpeed && this.stepSpeed != 1 || this.stepSpeed != 0)
        this.x -= this.stepSpeed * this.generateRandomStepNumber(3)
      else
        this.x = this.x - 1
    }

    if (this.movingBottom) {
      if (this.stepSpeed && this.stepSpeed != 1 || this.stepSpeed != 0)
        this.y += this.stepSpeed * this.generateRandomStepNumber(3)
      else
        this.y = this.y + 1
    } else {
      if (this.stepSpeed && this.stepSpeed != 1 || this.stepSpeed != 0)
        this.y -= this.stepSpeed * this.generateRandomStepNumber(3)
      else
        this.y = this.y - 1
    }

    this.isOutOfBounderies()

    this.ball.style.left = this.x + 'px'
    this.ball.style.top = this.y + 'px'
  }

  isOutOfBounderies(x, y) {
    //! X coordinates:
    if (this.x + this.ballWidth >= this.bodyWidth && this.movingRight) {
      this.movingRight = false
    }

    if (this.x <= 0 && !this.movingRight) {
      this.movingRight = true
    }

    //! Y coordinates:
    if (this.y + this.ballHeight >= this.bodyHeight && this.movingBottom) {
      this.movingBottom = false
    }

    if (this.y <= 0 && !this.movingBottom) {
      this.movingBottom = true
    }
  }

  moveTheBall() {
    this.ball.addEventListener('mouseover', () => {
      this.ball.classList.add('hover');
      clearInterval(this.intervalID)
    })

    this.ball.addEventListener('mouseout', () => {
      this.ball.classList.remove('hover');
      clearInterval(this.intervalID)
      this.moveTheBall()
    })

    this.ball.className = 'ball'
    this.ball.style.backgroundColor = this.color
    document.body.appendChild(this.ball)
    this.intervalID = setInterval(this.intervalHandler, 1)
  }
}

function randomNumber(maxLimit) {
  return Math.floor(Math.random() * maxLimit) + 70
}

function getRandomColor() {
  let r = randomNumber(256)
  let g = randomNumber(256)
  let b = randomNumber(256)

  return `rgb(${r},${g},${b})`
}

const ballsArray = []

for (let i = 0; i < 75; i++) {
  await sleep(2000)
  ballsArray.push(new Ball(0, 0, getRandomColor(), 1, 10))
  ballsArray[i].moveTheBall()
}

// const ball1 = new Ball(0, 0, 'yellow', 3, 20)
// const ball2 = new Ball(0, 0, 'lightgreen', 3, 20)
// const ball3 = new Ball(0, 0, 'blue', 3, 20)
// const ball4 = new Ball(0, 0, 'pink', 3, 20)
// const ball5 = new Ball(0, 0, 'purple', 3, 20)
// const ball6 = new Ball(0, 0, 'orange', 3, 20)
// const ball7 = new Ball(0, 0, 'lightgray', 3, 20)
// const ball8 = new Ball(0, 0, 'red', 3, 20)
// const ball9 = new Ball(0, 0, 'lightblue', 3, 20)
// const ball10 = new Ball(0, 0, 'navy', 3, 20)
// const ball11 = new Ball(0, 0, 'gold', 3, 20)

// ball1.moveTheBall()
// ball2.moveTheBall()
// ball3.moveTheBall()
// ball4.moveTheBall()
// ball5.moveTheBall()
// ball6.moveTheBall()
// ball7.moveTheBall()
// ball8.moveTheBall()
// ball9.moveTheBall()
// ball10.moveTheBall()
// ball11.moveTheBall()
