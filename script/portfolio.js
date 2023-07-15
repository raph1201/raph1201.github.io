// EXPAND LEFT DIV
function toggleExpandLeft() {
    // COLLAPSE RIGHT DIV
    var divW = document.querySelectorAll('.collapsable-width');
    divW[1].classList.toggle('collapsed-width');

    // SHRINK LEFT DIV
    var divH = document.querySelectorAll('.collapsable-height');
    divH[0].classList.toggle('collapsed-height');

    // REMOVE GAP
    var row = document.querySelector('.gap');
    row.classList.toggle('no-gap');

    // REMOVE OVERLAY
    var overlay = document.querySelectorAll('.box2-child-overlay');
    overlay[0].classList.toggle('box2-child-overlay-hidden');

    // CHANGE TEXT
    var text = document.querySelectorAll('.box2-text');
    text[0].classList.toggle('box2-text-expanded');

    // SHOW 
    var courses = document.querySelectorAll('.hidden');
    courses.forEach(element => {
        element.classList.toggle('show');
    });
}

// EXPAND RIGHT DIV
function toggleExpandRight() {
    // COLLAPSE LEFT DIV
    var divW = document.querySelectorAll('.collapsable-width');
    divW[0].classList.toggle('collapsed-width');

    // SHRINK RIGHT DIV
    var divH = document.querySelectorAll('.collapsable-height');
    divH[1].classList.toggle('collapsed-height');

    // REMOVE GAP
    var row = document.querySelector('.gap');
    row.classList.toggle('no-gap');

    // REMOVE OVERLAY
    var overlay = document.querySelectorAll('.box2-child-overlay');
    overlay[1].classList.toggle('box2-child-overlay-hidden');

    // CHANGE TEXT
    var text = document.querySelectorAll('.box2-text');
    text[1].classList.toggle('box2-text-expanded');

    // SHOW 
    var courses = document.querySelectorAll('.hidden2');
    courses.forEach(element => {
        element.classList.toggle('show2');
    });
}