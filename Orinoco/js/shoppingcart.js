//----------------------------------------- Javascipt for shoppingcart.html page--------------------------------------------------
let amount = 0;

//----------------------------------------- function to get localStorage content---------------------------------------------------------------
function getItemsFromLocalStorage(response) {
    let i = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items array from localStorage
    if (arrayOfItemsInCart === null || arrayOfItemsInCart.length === 0) {   //case localStorage not exist or empty
        document.querySelector(".Items").innerHTML += `<h2>Le panier est vide</h2>`;
        document.querySelector(".itemsAmount").textContent = "0 €";
        document.querySelector(".itemsSubTotalAmount").textContent = "0 €";
        response = "cart is empty";
        console.log("debug id1 " + response);
    } else{                                                                 //case localStorage has 1 or more items
        arrayOfItemsInCart.forEach(itemsInCart => {                         //loop to add all items from localStorage
            i++;
            cartIndex = i;
            createShoppingCartCards(itemsInCart)                            //call create SC cards
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
                                <label for="quantity">Quantité:</label>
                                <p class="ButtonChangeQty"><input id="quantity" type="number" onchange="getQtyChangeIndex(this)" value =${itemsInCart.quantity} min="1" class="form-control quantity-input"></P>
                                <p class="ButtonRemoveItem"><button class="btn btn-warning mt-5" type="submit" onclick="getButtonRemoveIndex(this)"><i class="fas fa-trash-alt"></i> Supprimer</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `
};


//----------------------------------------- function to get button index to retrieve which item to delete---------------------------------------------------------------
function getQtyChangeIndex(buttonIndex){
    const index = Array
                    .from(document.getElementsByClassName('ButtonChangeQty'))
                    .findIndex(x=>x===buttonIndex.parentNode);
    let currentQty = 0;
    let newQty = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items already in localStorage
    currentQty = arrayOfItemsInCart[index].quantity;
    newQty = document.getElementsByClassName('quantity-input')[index].value;
    if (newQty != currentQty) {
        arrayOfItemsInCart[index].quantity = newQty;
        updateTotalQty(parseInt(newQty - currentQty));                      //call function to update qty
    }     
    localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));//set new array in localStorage                
    document.location.reload();                                             //reload full page to refresh items in SC
 };


//----------------------------------------- function to get button index to retrieve which item to delete---------------------------------------------------------------
function getButtonRemoveIndex(buttonIndex){
    const index = Array
                    .from(document.getElementsByClassName('ButtonRemoveItem'))
                    .findIndex(x=>x===buttonIndex.parentNode);
    removeItemFromLocalStorage(index);
    document.location.reload();         //reload full page to refresh items in SC
 };


//----------------------------------------- function to remove item from SC then reload card's content in the shopping cart section-------------------------------------
function removeItemFromLocalStorage(itemIndex){
    let qty = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items already in localStorage
    qty = arrayOfItemsInCart[itemIndex].quantity;
    updateTotalQty(parseInt(-qty));                                         //call function to update qty
    arrayOfItemsInCart.splice(itemIndex, 1);                                //remove line in array
    localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));//set new array in localStorage                
};


//----------------------------------------- Update element's values-----------------------------------------------------------------
function updateGoodsInfo() {
    //update display info of items qty in cart
    let totalquantity = 0;
    totalquantity = JSON.parse(localStorage.getItem('totalItemsInCart'));
    if (totalquantity === null) {
        totalquantity = 0;
    } else {
        document.getElementById("itemsQtyInCartP").textContent = totalquantity + " article(s) dans le panier";
        //calculate € amount of goods in cart
        let qty = 0;
        let itemCost = 0;
        arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items array from localStorage
        arrayOfItemsInCart.forEach(itemsInCart => {                             //loop to collect qty and cost of each item in localStorage
            itemCost = itemsInCart.price;
            qty = itemsInCart.quantity;
            amount = amount + (itemCost * qty)

            response = "goods amount" + amount;
            console.log("debug id2 " + response);
        });
        document.querySelector(".itemsAmount").textContent = amount + " €";
        document.querySelector(".itemsSubTotalAmount").textContent = amount + " €";
    };
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
            collectContactdetails(response);
        }
    });
};

//-----------------------------------------function to format data for the post-----------------------------------------------------------------
function collectContactdetails (valid) {
    if (valid === true) {
        let contact = {                                                     //create an array with customer inputs
            lastName : document.getElementById("lastname").value,
            firstName : document.getElementById("firstname").value,
            address : document.getElementById("address").value,
            city : document.getElementById("city").value,
            zip : document.getElementById("zip").value,
            email : document.getElementById("email").value
        };
        localStorage.setItem("contact", JSON.stringify(contact));           //set customer inputs to localStorage

        var currentTime = new Date();
        let orderinfo = {
            orderDate : "du " + currentTime.toLocaleDateString() + " à " + currentTime.toLocaleTimeString(),
            orderAmount : amount
        };

        localStorage.setItem("orderinfo", JSON.stringify(orderinfo));                
        window.location.href = "ordersummary.html";                         //re-direct to the order summary page
    }else {
        alert("L'envoi de la commande a échouée");
    };
};

//---------------------------------------------Sequence----------------------------------------------------------------
displayTotalQty();
checkInputsValidity(false);
updateGoodsInfo();
getItemsFromLocalStorage();