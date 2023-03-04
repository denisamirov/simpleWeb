const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const game = document.getElementById("game");


//Чтобы игра не запускалась сразу
cactus.classList.remove("cactus")
//Чтобы игра не запускалась сразу

//При нажатии на любую клавишу будет выполняться функция jump()
document.addEventListener("keydown", function(event) {
    jump();
});

//Определение функции jump()
function jump () {
    //Если у динозавра нет класса jump добавить ему этот класс
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    //По истечению 300 мс у динозаврика удалить класс jump
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 600)
}


let isAlive = setInterval (function() {
    let incr = document.getElementById('numb').value;
    let lose = document.getElementById('numb2').value;  //Новое
    //Старт.... Получаем положение динозаврика и кактуса
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    //Конец... Получаем положение динозаврика и кактуса
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        cactus.classList.remove("cactus")
        alert("GameOVER");
        cactus.classList.add("cactus")
        document.getElementById('numb2').value = Number(lose) + 1   //Новое
        document.getElementById('numb').value = 0;
        incr = 0;
        gameOvers(lose);
    }

    if (incr > 500 && incr < 2000) {
        game.classList.add("game2")
        game.classList.remove("game")
    }
    else if (incr > 3000) {
        game.classList.add("game3")
        game.classList.remove("game2")

    }
    
    document.getElementById('numb').value = Number(incr) + 1
                                        }, 10)


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyX') {
        cactus.classList.remove("cactus")
    }

    if (event.code == 'Space') {
        dino.classList.add("jump")
        cactus.classList.add("cactus")
    }

  });


let legs  = setInterval(function() {

    setTimeout(function() {
        dino.classList.remove("dino")
        dino.classList.add("dino2")
    }, 500)

    setTimeout(function() {
        dino.classList.remove("dino2")
        dino.classList.add("dino")
    }, 600)
  
}, 200)


//Новая функция 
function gameOvers(incrLose) {
    const life1 = document.getElementById("life1")
    const life2 = document.getElementById("life2")
    const life3 = document.getElementById("life3")
    if (incrLose > 1) {
        life1.classList.add("non-life")
    }
    if (incrLose > 2 && incrLose < 5) {
        life2.classList.add("non-life")
    }
    if (incrLose > 4 && incrLose < 6) {
        life3.classList.add("non-life")
    }
} 