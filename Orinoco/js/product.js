//-----------------------------------------Javascipt for product.html page------------------------------------------

//----------------------------------------- function to check server connection--------------------------------------------
async function testServerConnection(){
    await fetch(url).then((response) => {
        if (response.status === 200) {          //server response is OK = 200 
//            console.log("debug product id1 " + response.status + " " + response.statusText); // debug to delete
       }else{                                   //server response is NOT OK != 200
            throw new Error(response.status + " " + response.statusText);
         }
        return response;
    })
    .then((returnedResponse) => {               // Connection OK
        updateConnectionMessage(returnedResponse, true);
        getProductDetails(productId);
        displaySpecialOffer(true);              //show banner (true / false)

    })
    .catch((error) => {                         // Catch error when server does not repond
        updateConnectionMessage(error, false);
    });
};


//-----------------------------------------function to get one product's details---------------------------------------------
let productId = new URL(window.location.href).searchParams.get('id'); //extract id from the full href address https://developer.mozilla.org/fr/docs/Web/API/URL

function getProductDetails(urlForProductId){
    fetch(url + "/" + urlForProductId)
    .then( data => data.json())
    .then( article => {
        diplayOneCard(article);
        addProductOptions(article);
    });
};


//-----------------------------------------function to create one card with product's details-------------------------------------
function diplayOneCard(article){
    numberOfOption = article.varnish.length;   
    document.querySelector(".row").innerHTML += `<div class="col-lg-6 col-md-6 mb-4 text-center mx-auto">
                                                    <div class="card h-100">
                                                        <img class="card-img-top" src=${article.imageUrl} alt="image objet"/>
                                                        <div class="card-body">
                                                            <h4 class="card-title">${article.name}"</h4>
                                                            <h5 class="text-right">${article.price/100} €</h5>
                                                            <p class="card-text">${article.description}</p>

                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <label class="input-group-text" for="inputGroupColor">Couleurs</label>
                                                                </div>
                                                                <select class="custom-select options" id="inputGroupColor">                                   
                                                                </select>
                                                            </div>
                                                                    
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <label class="input-group-text" for="inputGroupQuantity">Quantité</label>
                                                                </div>
                                                                <select class="custom-select" id="inputGroupQuantity">
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

                                                            <a href="shoppingcart.html" class="btn btn-primary">Ajouter au panier</a>
                                                        </div>
                                                        <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                    </div>
                                                </div>`;
};


//-----------------------------------------function to add product's options-------------------------------------
function addProductOptions(article){
    //loop to add options => fct show option
    ArticleOption = "";
    j = 0; 
    for (let ArticleOption of article.varnish) {                                      
        document.querySelector(".options").innerHTML += `<option value="${j}">${ArticleOption}</option>`;
        ArticleOption++;
        j++;
    };
};


//---------------------------------------------Sequence----------------------------------------------------------------
testServerConnection();
