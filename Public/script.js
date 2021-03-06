var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var snakeW=10;
var snakeH=10;
var dir="right"

function drawSnake(x,y){
    ctx.fillStyle="green";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)
}
// create snake
var len=4;
snake=[];
for(var i=len-1;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
}
//control direction
document.addEventListener("keydown",dirControl)
function dirControl(event){
    if(event.keyCode==37 && dir!="right"){
        dir="left"
    }
    if(event.keyCode==38 && dir!="down"){
        dir="up"
    }
    if(event.keyCode==39 && dir!="left"){
        dir="right"
    }
    if(event.keyCode==40 && dir!="up"){
        dir="down"
    }
}

//create food
var food={
    x:Math.round(Math.random()*(cvs.width/snakeW-1)+1),
    y:Math.round(Math.random()*(cvs.height/snakeH-1)+1)
}
//draw food
function drawFood(x,y){
    ctx.fillStyle="red";
    ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH)
    ctx.fillStyle="black";
    ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH)

}

//draw function
function draw(){
    ctx.clearRect(0,0,cvs.clientWidth,cvs.height)
    for(var i=0;i<snake.length;i++){
    var X=snake[i].x;
    var Y=snake[i].y;
    drawSnake(X,Y)
}
drawFood(food.x,food.y)
//snake head
var snakeX=snake[0].x
var snakeY=snake[0].y

//game over
if(snakeX<0 || snakeY<0 || snakeX>=cvs.width/snakeW || snakeY>=cvs.height/snakeH){
    alert("Game Over!")
}

if(dir=="right"){snakeX++}
else if(dir=="left"){snakeX--}
else if(dir=="up"){snakeY--}
else if(dir=="down"){snakeY++}

if(snakeX==food.x && snakeY==food.y){
    food={
        x:Math.round(Math.random()*(cvs.width/snakeW-1)+1),
        y:Math.round(Math.random()*(cvs.height/snakeH-1)+1)
    }
    var newHead={
        x:snakeX,
        y:snakeY
    }
}else{
    snake.pop();
    var newHead={
        x:snakeX,
        y:snakeY
    }
}

//new head
// var newHead={
//     x:snakeX,
//     y:snakeY
// }
snake.unshift(newHead);
}

setInterval(draw,100)
