
// OPTION 1
function makeYellow() {
    document.body.style.backgroundColor ='orange';
}


function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 23 for click event handler
const makeBlue = document.getElementById('btn-blue');
console.log(makeBlue);

makeBlue.onclick = function () {
    
    document.body.style.backgroundColor = 'blue';
}


// option 3
const makePurple = document.getElementById('btn-purple');
console.log(makePurple);

makePurple.onclick = btnMakePurple;

function btnMakePurple() {
    document.body.style.backgroundColor = 'purple';
}
