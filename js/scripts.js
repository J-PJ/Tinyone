
/*pegar todas li dentro da classe x com querySelector
iterar esse retorno (array) das li com um evento de click usando addEventListener
criar uma funcao que remove todas as classes active de todas as li com classList
e adicionar a classe active aonde ocorreu o click tambem com classList*/

var bullets = document.querySelectorAll('.ballnav li');


function removeActive() {
    for (a = 0; a < bullets.length; a++) {
        bullets[a].classList.remove('active');
    }
}

function addCLass(el, klass) {
    el.classList.add(klass);
}

function eventsAction() {
    for (a = 0; a < bullets.length; a++) {
        bullets[a].addEventListener('click', function () {
            removeActive();
            addCLass(this, 'active');
        })
    }
}

function changeTheme(variable, color) {
    document.documentElement.style.setProperty(variable, color);
}

function validateTheme() {
    var value = getComputedStyle(document.documentElement).getPropertyValue('--default-color');
    if (value == '#c3f9ff') {
        changeTheme('--default-color', '#fcdb00');
    } else {
        changeTheme('--default-color', '#c3f9ff');
    }
}


// init events
eventsAction();

