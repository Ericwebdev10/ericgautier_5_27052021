//-----------------------------------------Javascipt for common functions------------------------------------------

//-----------------------------------------functions regex to validate inputs before post-------------------------------------
function isValidName(sName) {               //https://stackoverflow.com/questions/20690499/concrete-javascript-regex-for-accented-characters-diacritics 
    return /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u1E00-\u1EFF .'-]+$/.test(sName);        //https://stackoverflow.com/questions/3659848/how-do-i-include-and-in-this-regular-expressions
};
function isValidAddress(sAddress){
    return /^[0-9/a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u1E00-\u1EFF .'-]+$/.test(sAddress);
}
function isValidCity(sCity){
    return /^[a-zA-Z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u1E00-\u1EFF .'-]+$/.test(sCity);    
}
function isValidZip(sZip) {
    return /^[0-9]{5,5}$/.test(sZip);
};
function isValidEmail(sEmail) {             //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(sEmail);
};


//-----------------------------------------function display banner----------------------------------------------------
function displaySpecialOffer(visible){
    if (visible === true) {
    document.querySelector(".row").innerHTML += `<div class="col-lg-12 text-center alert alert-info alert-dismissible fade show mt-5 pt-5 shadow-lg" role="alert">
                                                    <h5 class="alert-heading"> ${specialOfferText1}</h5>
                                                    <p>${specialOfferText2}</p>
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>`;
    }
};


//-----------------------------------------function display title----------------------------------------------------
function displayTitle(visible){
    if (visible === true) {
    document.querySelector(".row").innerHTML += `<div class="col-lg-12 text-center">
                                                    <h1 id="mainTitle" class="my-4">${mainTitleText}</h1>
                                                </div>`;
    }
};


//-----------------------------------------function to handle title error or message-------------------------------------
function updateErrorMessage(error, clear){
    if (clear === true){
        document.getElementById("mainTitle").innerHTML =    `<h1 class="my-4"></h1>`; // clear default text "connection en cours..."
    }else {
        document.getElementById("mainTitle").innerHTML =    `<div class="col-lg-12 text-center text-danger bg-warning m-5">
                                                            <h1 class="my-4">Connection impossible => ${error}</h1>`;
    };
};


//-----------------------------------------function to update Total Qty in localStorage and show it in the navbar-------------------------------------
function updateTotalQty(qtyToAdd) {
    totalQuantity = JSON.parse(localStorage.getItem('totalItemsInCart'));       //get back total qty from localStorage
    if (totalQuantity === null) {
        localStorage.setItem("totalItemsInCart", JSON.stringify(0 + parseInt(qtyToAdd)));
    }else {
        localStorage.setItem("totalItemsInCart", JSON.stringify(totalQuantity + parseInt(qtyToAdd))); 
    };
    displayTotalQty();
    return("quantity updated in LS");
};


//-----------------------------------------function to show cart's quantity in the navbar-------------------------------------
function displayTotalQty() {
    let totalquantity = 0;

    totalquantity = JSON.parse(localStorage.getItem('totalItemsInCart'));
    if (totalquantity === null) {
        totalquantity = 0;
    };
    document.getElementById("itemsQtyInCart").innerHTML =  `<a class="nav-link" id="itemsInCart" href="shoppingcart.html" >
                                                            Panier (${totalquantity})
                                                            <span class="sr-only">(current)</span>
                                                            <img src="assets/cart.jpg" height="20" alt="Logo panier" />
                                                        </a>`
};