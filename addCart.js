const addTOcart = document.querySelectorAll('.add-to-cart')
// console.log(addTOcart);



let cart = [];
for(const item of addTOcart){

    // console.log(item);

    item.addEventListener('click', function (event) {
        
        const card = event.target.closest('.card') ;
        // console.log(card);


        // access the elements of card
        const productCategory =card.querySelector('.category').innerText;
        console.log(productCategory);

        const productName = card.querySelector('.productName').innerText ;
        console.log(productName);
        
        const productPrice = parseInt (card.querySelector('.productPrice').innerText);
        console.log(productPrice);
        
        
        // collect all info in an object
        const product = {
            name: productName ,
            category : productCategory ,
            price : productPrice ,
            quantity : 1 ,
        }
        

        // passing object to crater a function check in the cart card ida available or not
        addToCart(product);
    })
    
}



function addToCart (product){


    // checking the name inside cart arr 
    const existingItem = cart.find(function (item){

        return item.name === product.name;
    })


    // if name already exits than item quantity incress the quantity not add another item .. if item  not exits than push the item on the cart.
    if (existingItem) {
        
        existingItem.quantity ++ ;
    }else{

        cart.push(product);
    }


    
    updateCard();

}



const updateCart = document.getElementById('update-cart');
const totalPrice = document.getElementById('totalPrice');
const totalQuantity = document.getElementById('totalCount');



function updateCard (){

    updateCart.innerHTML = ''
    let total = 0 ;
    let quantity = 0 ;

    for (const item of cart){
    
        total = total + item.price * item.quantity ;
        quantity = quantity +item.quantity;
    
        console.log(total , quantity);
        

        const div = document.createElement('div');
        div.innerHTML = `

            ${item.name} x ${item.quantity} = ${ item.price * item.quantity} BDT.
        `

        updateCart.appendChild(div);
    }

    totalPrice.innerText = total ;
    totalQuantity.innerText = quantity
}