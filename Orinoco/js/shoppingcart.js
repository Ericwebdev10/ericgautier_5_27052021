//----------------------------------------- Javascipt for shoppingcart.html page--------------------------------------------------

//----------------------------------------- function to get localStorage content---------------------------------------------------------------
function getItemsFromLocalStorage(response) {
    let i = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart')); //get back items array from localStorage
    if (arrayOfItemsInCart === null) {                                    //case localStorage is blank
        document.querySelector(".Items").innerHTML += `<h2>Le panier est vide</h2>`
        response = "cart is empty";
        console.log("debug id1 " + response);

    } else{                                                               //case localStorage has 1 or more items
        arrayOfItemsInCart.forEach(itemsInCart => {                       //loop to check if the same item with same varnish already exist in localStorage
            i++;
            cartIndex = i;
            createShoppingCartCards(itemsInCart, cartIndex)
            //itemsInCart._id                
            response = "cart is NOT empty";
            console.log("debug id2 " + response);
        });
    };

};

//----------------------------------------- function to create card's content in the shopping cart section---------------------------------------------------------------
function createShoppingCartCards(itemsInCart, cartIndex) {
    document.querySelector(".Items").innerHTML += 
        `<div class="product">
            <div class="row border-bottom border-secondary">
                <div class="col-md-3">
                    <p id="cartIndex">${cartIndex}</p>
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
                                <label for="quantity">Quantité:</label>
                                <input id="quantity" type="number" value ="1" min="1" class="form-control quantity-input">
                                <p class="ButtonRemoveItem"><button class="btn btn-warning mt-5" type="submit" onclick="getButtonIndex(this)"><i class="fas fa-trash-alt"></i> Supprimer</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `

    /*document // add Event Listener to Button
        .getElementById("ButtonRemoveItem")
        .addEventListener("click", function() {removeItemFromLocalStorage(itemsInCart._id, itemsInCart.varnish);}, false);
                                                          //itemsInCart._id, itemsInCart.varnish
*/
};

//----------------------------------------- function to get button index---------------------------------------------------------------

//https://stackoverflow.com/questions/61566445/point-out-the-current-dom-class-being-used-in-js
function getButtonIndex(buttonIndex){
    const index = Array.from(document.getElementsByClassName('ButtonRemoveItem'))
                       .findIndex(x=>x===buttonIndex.parentNode);
    removeItemFromLocalStorage(index);
 }



//----------------------------------------- function to remove item from SC then reload card's content in the shopping cart section---------------------------------------------------------------
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

function removeItemFromLocalStorage(itemIndex){
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart')); //get back items already in localStorage
    arrayOfItemsInCart.splice(itemIndex, 1);
    localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));                

};


    /*      arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart')); //get back items already in localStorage
      indexOf_ID = arrayOfItemsInCart.findIndex(x => x._id ==="5beaaf2e1c9d440000a57d9a");
      //5beaae361c9d440000a57d99  
      console.log(indexOf_ID);


    console.log(_id, varnish);
    let i = 0;
    arrayOfItemsInCart.forEach(itemsInCart => {                       //loop to check if the same item with same varnish already exist in localStorage
        if (_id === itemsInCart._id && varnish === itemsInCart.varnish) {                
//            let itemIndex = arrayOfItemsInCart.index
//            arrayOfItemsInCart.splice(itemIndex, 1)
//            localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));                

            response = "item";
            console.log("debug id2 " + response);
        };
        i++;
    });
};
*/
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