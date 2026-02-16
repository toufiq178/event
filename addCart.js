const addTOcart = document.querySelectorAll('.add-to-cart')
// console.log(addTOcart);

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
        
        
        const product = {

            name: productName ,
            category : productCategory ,
            price : productPrice ,
            quantity : 1 ,
        }
        
        addToCart(product);
    })
    
}
