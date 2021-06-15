//----------------------------------------- Javascipt for shoppingcart.html page--------------------------------------------------


/**
 * Gère l'affichage et les interactions de la page de contact
 */
 document.querySelector('.customer_inputs input[type="button"]').addEventListener("click",function(){
    var valid = true;
    for(let input of document.querySelectorAll(".customer_inputs input,.customer_inputs textarea")){
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    if(valid){
        alert("Votre message a bien été envoyé.");
    }
});