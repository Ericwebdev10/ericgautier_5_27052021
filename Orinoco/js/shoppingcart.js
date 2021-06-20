//----------------------------------------- Javascipt for shoppingcart.html page--------------------------------------------------

//----------------------------------------- function to get localStorage content---------------------------------------------------------------
function getItemsFromLocalStorage(response) {
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart')); //get back items array from localStorage
    if (arrayOfItemsInCart === null) {                                    //case localStorage is blank
        document.querySelector(".Items").innerHTML += `<h2>Le panier est vide</h2>`
        response = "cart is empty";
        console.log("debug id1 " + response);

    } else{                                                               //case localStorage has 1 or more items
        arrayOfItemsInCart.forEach(itemsInCart => {                       //loop to check if the same item with same varnish already exist in localStorage
            createShoppingCartCards(itemsInCart)
            //itemsInCart._id                
            response = "cart is NOT empty";
            console.log("debug id2 " + response);
        });
    };

};

//----------------------------------------- function to create card's content in the shopping cart section---------------------------------------------------------------
function createShoppingCartCards(itemsInCart) {
    document.querySelector(".Items").innerHTML += 
        `<div class="product">
            <div class="row border-bottom border-secondary">
                <div class="col-md-3">
                    <img class="img-fluid mx-auto d-block image" src="${itemsInCart.imageUrl}">
                </div>
                <div class="col-md-8">
                    <div class="info">
                        <div class="row">
                            <div class="col-md-5 product-name">
                                <div class="product-name">
                                    <a href="#">${itemsInCart.name}</a>
                                    <div class="product-info">
                                        <div>Couleur: <span class="value">${itemsInCart.varnish}</span></div>
                                        <div>Description: <span class="value">${itemsInCart.description}</span></div>
                                        <div>ID: <span class="value">${itemsInCart._id}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 price">
                                <span>${itemsInCart.price} €</span>
                            </div>
                            <div class="col-md-4 quantity">
                                <label for="quantity">Quantity:</label>
                                <input id="quantity" type="number" value ="1" min="1" class="form-control quantity-input">
                                <input type="button" class="btn btn-warning mt-5" value="Supprimer">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `
};



//----------------------------------------- Update element's values-----------------------------------------------------------------
function updateElementText() {

    let totalquantity = 0;

    totalquantity = JSON.parse(localStorage.getItem('totalItemsInCart'));
    if (totalquantity === null) {
        totalquantity = 0;
    };
    document.getElementById("itemsQtyInCartP").textContent = totalquantity + " article(s) dans le panier";
};


//----------------------------------------- check inputs validity-----------------------------------------------------------------
function checkInputsValidity(response) {
    document.querySelector('.customer_inputs input[type="button"]').addEventListener("click",function(){
        var valid = true;
        for(let input of document.querySelectorAll(".customer_inputs input")){
            valid &= input.reportValidity();
            if(!valid){
                break;
            }
        }
        if(valid){
            response = true;
            alert("mettre à jour la page commande :)");
        }
    });
};

//---------------------------------------------Sequence----------------------------------------------------------------
displayTotalQty();
checkInputsValidity(false);
updateElementText();
getItemsFromLocalStorage();