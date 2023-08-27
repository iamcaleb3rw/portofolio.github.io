let changeIcon = function(icon) {
    icon.classList.toggle('fa-lock')
}

let menuOptions = document.querySelector('.options');


function openOptions(){
    menuOptions.style.display = "initial";
}


function closeOptions(){
    menuOptions.style.display = "none";
}