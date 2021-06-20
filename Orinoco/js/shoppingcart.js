//----------------------------------------- Javascipt for shoppingcart.html page--------------------------------------------------

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
