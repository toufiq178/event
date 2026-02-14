// console.log('added handler');

document.getElementById('change-handler')
    .addEventListener('click', function(){
        
        // console.log('clicked');
        const update = document.getElementById('event-title')
        
        update.innerText = 'im update now'
        
    })



document.getElementById('btn-login')
    .addEventListener('click', function(){

        const loginCheck = document.getElementById('login-check');
        
        loginCheck.innerText = 'successful';
        loginCheck.style.color = 'green';
        loginCheck.style.backgroundColor = 'cyan';
        
    }) 



document.getElementById('update-name')
    .addEventListener('click', function (){

        const nameInput = document.getElementById('input-name');
        // console.log(nameInput);
        const name = nameInput.value;
        console.log(name);
        
        // set name
        const nameShow = document.getElementById('name-show');
        nameShow.innerText = name;
        
    })





document.getElementById('update-fish')
    .addEventListener('click' , function (){

        console.log('yes');
         const inputFish = document.getElementById('input-fish');
         const fish = inputFish.value;
         console.log(fish);
        
         const fishName = document.getElementById('fish-name');
         fishName.innerText = fish ;
         
    })








document.getElementById('update-color')
    .addEventListener('click' ,function (){
        // console.log('yes');
        
        const colorInput = document.getElementById('input-color');
        // console.log(colorInput);
        const color = colorInput.value;

        console.log(color);
        const colorShow = document.getElementById('color-name');
        colorShow.innerText = color;
        
        
    })