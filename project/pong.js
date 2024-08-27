const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

const netWidth = 4;
const netHeight = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;

const ballRadius = 10;

let playerScore = 0;
let computerScore = 0;

let playerPaddle = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "#fff",
    dy: 0
};

let computerPaddle = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: "#fff",
    dy: 3
};

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: ballRadius,
    speed: 5,
    dx: 5,
    dy: 5,
    color: "#ff5722"
};

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
}

function drawNet() {
    for (let i = 0; i <= canvas.height; i += 15) {
        drawRect(canvas.width / 2 - netWidth / 2, i, netWidth, 10, "#fff");
    }
}

function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "32px Courier New";
    ctx.fillText(text, x, y);
}

function movePaddle(paddle, dy) {
    paddle.y += dy;
    if (paddle.y < 0) paddle.y = 0;
    if (paddle.y + paddle.height > canvas.height) paddle.y = canvas.height - paddle.height;
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    let paddle = (ball.x < canvas.width / 2) ? playerPaddle : computerPaddle;

    if (ball.x + ball.radius > paddle.x && ball.x - ball.radius < paddle.x + paddle.width &&
        ball.y + ball.radius > paddle.y && ball.y - ball.radius < paddle.y + paddle.height) {

        ball.dx *= -1;
        ball.speed += 0.5;
    }

    if (ball.x - ball.radius < 0) {
        computerScore++;
        resetBall();
    }

    if (ball.x + ball.radius > canvas.width) {
        playerScore++;
        resetBall();
    }
}

function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = 5;
    ball.dx *= -1;
}

function update() {
    movePaddle(playerPaddle, playerPaddle.dy);
    moveBall();
    computerPaddle.y += (ball.y - (computerPaddle.y + computerPaddle.height / 2)) * 0.1;
}

function render() {
    drawRect(0, 0, canvas.width, canvas.height, "#000");
    drawNet();
    drawText(playerScore, canvas.width / 4, canvas.height / 5, "#fff");
    drawText(computerScore, 3 * canvas.width / 4, canvas.height / 5, "#fff");
    drawRect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height, playerPaddle.color);
    drawRect(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height, computerPaddle.color);
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function gameLoop() {
    update();
    render();
}

canvas.addEventListener("mousemove", (event) => {
    let canvasRect = canvas.getBoundingClientRect();
    playerPaddle.y = event.clientY - canvasRect.top - playerPaddle.height / 2;
});

setInterval(gameLoop, 1000 / 60);
