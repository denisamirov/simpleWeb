const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

//Чтобы игра не запускалась сразу
cactus.classList.remove("cactus")
//Чтобы игра не запускалась сразу

document.addEventListener("keydown", function(event) {
    jump();
});


function jump () {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }

    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)
}


let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GameOVER")
    }
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