//----------------------------------------- Javascipt for shoppingcart.html page--------------------------------------------------

//----------------------------------------- check inputs validity-----------------------------------------------------------------
document.querySelector('.customer_inputs input[type="button"]').addEventListener("click",function(){
    var valid = true;
    for(let input of document.querySelectorAll(".customer_inputs input")){
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    if(valid){
        alert("mettre à jour la page commande :)");
    }
});


//---------------------------------------------Sequence----------------------------------------------------------------
displayTotalQty();
