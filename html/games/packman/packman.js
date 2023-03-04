let x = 0
let y = 0
let bx = 100
let by = 200

const plus = document.getElementById("incr");
document.addEventListener('keydown', function(event) {
    const packman = document.getElementById("packman");
    
    if (event.code == 'KeyD') {
        x +=10
       packman.style.left = `${x}px`
       packman.style.transform = "scale(1,1)"
    } 


    if (event.code == 'KeyA') {
        x -=10
       packman.style.left = `${x}px`
        packman.style.transform = "scale(-1,1)"
    }

    if (event.code == 'KeyW') {
        y -=5
       packman.style.top = `${y}px`
    }


    if (event.code == 'KeyS') {
        y +=5
       packman.style.top = `${y}px`
    }
       
    }
) 


setInterval(function() {
    let packman = document.getElementById("packman");
    let burger = document.getElementById("burger");
    let x = parseInt(window.getComputedStyle(packman).getPropertyValue("left"))
    let y = parseInt(window.getComputedStyle(packman).getPropertyValue("top"))
    let bx = parseInt(window.getComputedStyle(burger).getPropertyValue("left"))
    let by = parseInt(window.getComputedStyle(burger).getPropertyValue("top"))
    // console.log(Math.abs(bx - x), Math.abs(by - y))
    if (Math.abs(bx - x) <= 20 && Math.abs(by - y) <= 40) {
        plus.value = Number(plus.value) + 1;
        burger.style.top = "400px"
        burger.style.left = "800px"
        console.log("Ам ням")
        }
        
}, 50)

setInterval(function() {
    const burger = document.getElementById("burger")
    burger.style.display = "block"
    bx = Math.random() * 400
    by = Math.random() * 300
    burger.style.top = `${bx}px`
    burger.style.left = `${by}px`
 
}, 3000)



