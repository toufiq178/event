
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


// option 3    (OPTIONAL)
const makePurple = document.getElementById('btn-purple');
console.log(makePurple);

makePurple.onclick = btnMakePurple;

function btnMakePurple() {
    document.body.style.backgroundColor = 'purple';
}



// Option 4 add eventlistener

// get element by id
document.getElementById('btn-green').addEventListener('click',function name() {
    document.body.style.backgroundColor = 'green'

} )

document.getElementById('btn-gold')
    .addEventListener('click', function(){
        document.body.style.backgroundColor = 'gold';
    })


document.getElementById('btn-cyan').addEventListener('click', function(){

    document.body.style.backgroundColor ='cyan'
})