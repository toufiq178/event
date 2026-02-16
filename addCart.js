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


    // 
    updateCart();

}