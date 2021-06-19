//-----------------------------------------Javascipt for common functions------------------------------------------

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
function updateConnectionMessage(error, clear){
    if (clear === true){
        document.getElementById("mainTitle").innerHTML =    `<h1 class="my-4"></h1>`; // clear default text "connection en cours..."

    }else {
        document.getElementById("mainTitle").innerHTML =    `<div class="col-lg-12 text-center text-danger bg-warning">
                                                            <h1 class="my-4">Erreur connection => ${error}</h1>`;
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
};


//-----------------------------------------function to show cart quantity in the navbar-------------------------------------
function displayTotalQty() {
    let quantity = 0;

    quantity = JSON.parse(localStorage.getItem('totalItemsInCart'))
    if (quantity === null) {
        quantity = 0;
    };
    document.getElementById("itemsInCart").textContent = "Panier (" + quantity + ")";
 
};
