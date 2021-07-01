//-----------------------------------------Javascipt for product.html page------------------------------------------
let arrayOfItemsInCart = [];
let quantity = 0;
let totalQuantity = 0;

//----------------------------------------- function to check server connection--------------------------------------------
async function connectToServer(){
    await fetch(url).then((response) => {
        if (response.status === 200) {          //server response is OK = 200 
//            console.log("debug product id1 " + response.status + " " + response.statusText); // debug to delete
       }else{                                   //server response is NOT OK != 200
            throw new Error(response.status + " " + response.statusText);
         }
        return response;
    })
    .then((returnedResponse) => {               // Connection OK
        updateErrorMessage(returnedResponse, true);
        getProductDetails(productId);
        displaySpecialOffer(true);              //show banner (true / false)

    })
    .catch((error) => {                         // Catch error when server does not repond
        updateErrorMessage(error, false);
    });
};


//-----------------------------------------function to get one product's details---------------------------------------------
let productId = new URL(window.location.href).searchParams.get('id'); //extract id from the full href address https://developer.mozilla.org/fr/docs/Web/API/URL

function getProductDetails(urlForProductId){
    fetch(url + "/" + urlForProductId)
    .then( data => data.json())
    .then( item => {
        diplayOneCard(item);
        addProductOptions(item);
        return(urlForProductId);
    });
};


//-----------------------------------------function to create one card with product's details-------------------------------------
function diplayOneCard(item){
    numberOfOption = item.varnish.length;   
    document.querySelector(".row").innerHTML += 
        `<div class="col-lg-6 col-md-6 mb-4 text-center mx-auto">
            <div class="card h-100">
                <img id="item_imageUrl" class="card-img-top" src=${item.imageUrl} alt="image objet"/>
                <div class="card-body">
                    <h4 id="item_name" class="card-title">${item.name}</h4>
                    <h5 id="item_price" class="text-right">${item.price/100} €</h5>
                    <p id="item_description" class="card-text">${item.description}</p>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="item_option">Couleurs</label>
                        </div>
                        <select class="custom-select options" id="item_option"></select>
                    </div>
                            
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="item_quantity">Quantité</label>
                        </div>
                        <select class="custom-select" id="item_quantity">
                            <option selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div id="ButtonAddToCart" class="btn btn-block btn-primary mb-3">Ajouter au panier</div>
                    <div class="m-1">
                        <a href="index.html" class="btn btn-secondary m-1">Continuer les achats </a>
                        <a href="shoppingcart.html" class="btn btn-secondary m-1 pl-5 pr-5">Voir le panier</a>
                    </div>
                </div>
                <div class="card-footer"><small class="text-muted" id="item_id">${item._id}</small></div>
            </div>
        </div>`;
        
        document // add Event Listener to ButtonAddToCart
        .getElementById("ButtonAddToCart")
        .addEventListener("click", function() {checkItemInLocalStorage(item);}, false);
};


//-----------------------------------------function to add product's options-------------------------------------
function addProductOptions(item){
    //loop to add options
    itemOption = "";
    j = 0; 
    for (let itemOption of item.varnish) {                                      
        document.querySelector(".options").innerHTML += `<option value="${j}">${itemOption}</option>`;
        itemOption++;
        j++;
    };
    return(j);                              //count number of loop, should be equal to 4 for item 5be9cc611c9d440000c1421e 
};


//-----------------------------------------function to add item to cart-----------------------------------------
function checkItemInLocalStorage(selectedItem, response) {
    let cartIsEmpty = false;
    let itemExistInCart = false;
    let e = document.getElementById("item_option"); 
    const varnish = e.options[e.selectedIndex].text;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart')); //get back items already in localStorage
    quantity = document.getElementById("item_quantity").value;


    if (arrayOfItemsInCart === null) {                                    //case localStorage is blank
        cartIsEmpty = true;
        addItemToLocalStorage(selectedItem, cartIsEmpty);
        response = "cart empty => item added";
    } else{                                                               //case localStorage has 1 or more items
        cartIsEmpty = false;
        itemExistInCart = false;
        arrayOfItemsInCart.forEach(itemsInCart => {                       //loop to check if the same item with same varnish already exist in localStorage
            if (selectedItem._id === itemsInCart._id && varnish === itemsInCart.varnish) {                
                itemsInCart.quantity = parseInt(itemsInCart.quantity) + parseInt(quantity);   //if item found then change qty
                localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));                
                itemExistInCart = true;
                response = "cart NOT empty + same item exist => item qty changed";
             }
        });
        if (cartIsEmpty === false && itemExistInCart === false) {               //if item was not found in loop above                                                       
            addItemToLocalStorage(selectedItem, cartIsEmpty);
            response = "cart NOT empty + item not found => item added";
        };
    };
    updateTotalQty(quantity);
    return response;
};

//-----------------------------------------function to add an item to LocalStorage-------------------------------------
function addItemToLocalStorage(selectedItem, cartIsEmpty) {
    quantity = document.getElementById("item_quantity").value;
    let e = document.getElementById("item_option"); 
    const varnish = e.options[e.selectedIndex].text;
    
    let selectedItemArray = {
        _id : selectedItem._id,
        description : selectedItem.description,
        imageUrl : selectedItem.imageUrl,
        name : selectedItem.name,
        price : selectedItem.price / 100, // format price
        quantity : quantity,
        varnish : varnish,
    };
    
    if (cartIsEmpty === true) {         //initialise array if localStorage is empty (=null)
        arrayOfItemsInCart = [];
        arrayOfItemsInCart.push(selectedItemArray)
        localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));
        return("initialise array if localStorage is empty (=null)");
    }else{                              //add new item 
        arrayOfItemsInCart.push(selectedItemArray)
        localStorage.setItem("itemsInCart", JSON.stringify(arrayOfItemsInCart));
        return("add new item");
    };
};


//---------------------------------------------Sequence----------------------------------------------------------------
connectToServer();
displayTotalQty();
