const ball = document.getElementById('ball')

let intervalID;

let t = 1

let x = ball.offsetLeft;
let y = ball.offsetTop;

let movingRight = true;
let movingBottom = true;

let windowWidth = document.body.clientWidth;
let windowHeight = document.body.clientHeight;

let ballWidth = ball.clientWidth;
let ballHeight = ball.clientHeight;



function roleTheBall() {
    ball.addEventListener('mouseover', () => {
        ball.classList.add('hover');
        clearInterval(intervalID)
    })

    ball.addEventListener('mouseout', () => {
        ball.classList.remove('hover');
        roleTheBall()
    })

    //! Repeating the function every t interval in ms:
    intervalID = setInterval(() => {
        //! Offset increament by 1:
        if (movingRight) {
            x += generateRandomNumber(5);
        } else {
            x -= generateRandomNumber(5);
        }

        if (movingBottom) {
            y += generateRandomNumber(5);
        } else {
            y -= generateRandomNumber(5);
        }

        //! Adding the value of the left css property of the ball element:
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        //! updting the value of the windowWidth and windowHeight with the latest Width and Height:

        isOutOfBounds(x, y)
    }, t)
}
function isOutOfBounds(x, y) {
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;

    if (x + ballWidth >= windowWidth && movingRight) {
        movingRight = false;
        console.log("Passed the boundaries on x coordinates")
        ball.style.backgroundColor = generateRandomColor()
    }

    if (x <= 0 && !movingRight) {
        movingRight = true;
        ball.style.backgroundColor = generateRandomColor()
    }



    if (y + ballHeight >= windowHeight && movingBottom) {
        movingBottom = false;
        ball.style.backgroundColor = generateRandomColor()
        console.log("Passed the boundaries on y coordinates")
    }

    if (y <= 0 && !movingBottom) {
        movingBottom = true;
        ball.style.backgroundColor = generateRandomColor()
    }


}

function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1))
}

function generateRandomColor() {
    let r, g, b
    r = generateRandomNumber(255)
    g = generateRandomNumber(255)
    b = generateRandomNumber(255)
    const newColor = `rgb(${r},${g},${b})`
    return newColor
}







roleTheBall()
