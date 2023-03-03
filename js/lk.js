let a = prompt("Введите пароль");

if (a == '123') {
    alert('Congratulation!')
}

else {
    //Редирект на страницу, расположенную по адресу /html/
    document.location.href = '/html/'
}


document.addEventListener("keydown", function(event) {
    if (event.code == 'KeyX') {
        diva.classList.add("second")
        diva.classList.remove("first")
    }

    if (event.code == 'KeyZ') {
        diva.classList.add("first")
        diva.classList.remove("second")
    }
});


const diva = document.getElementById("diva")
console.log(diva.classList)


