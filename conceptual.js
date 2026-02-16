const buttons = document.querySelectorAll('.add-to-card');
// console.log(buttons);


let cart = [];

for(const button of buttons){

    // console.log(button);
    button.addEventListener('click', function (event) {
        
        // console.log(event.target);
        
        const card = event.target.closest('.card');
        const productName = card.querySelector('.card-title').innerText;
        const productCategory = card.querySelector('.card-category').innerText;
        const productPrice = parseInt(card.querySelector('.card-price').innerText);
        // console.log(productName ,productCategory ,productPrice);
        
        const product = {
            name : productName ,
            category : productCategory ,
            price : productPrice ,
            quantity : 1 
        }

        // console.log(product);

        addToCart(product);
        
    })

    
}


function addToCart(product) {
    
    const existingItem = cart.find(function(item){

        return item.name === product.name ;
    })

    if (existingItem) {
        existingItem.quantity ++;

    }else{
        cart.push(product);
    }

    updateCart();

}



const cartItems = document.getElementById('cart-items');
const totalQuantity = document.getElementById('total-quantity');
const totalPrice = document.getElementById('total-price');


function updateCart() {
    
    cartItems.innerHTML = ''
    let quantityCount = 0 ;
    let total = 0 ;

    for (const item of cart){

        total = total + item.price * item.quantity; 
        quantityCount = quantityCount + item.quantity ;

        
        
        const div = document.createElement('div');
        div.innerHTML = `
            ${item.name} (x ${item.quantity}) - $ ${item.price * item.quantity}

        `


        // const a = 2 
        // const b = `${a}`
        // console.log(b);
        

        cartItems.appendChild(div)
    }
    
    // console.log(total);
    totalQuantity.innerText = quantityCount ;
    totalPrice.innerText = total ;

    
}