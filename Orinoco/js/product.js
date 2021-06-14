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
        updateMainTitle(returnedResponse, true);
        getProductDetails(productId);
        displaySpecialOffer(true);              //show banner (true / false)

    })
    .catch((error) => {                         // Catch error when server does not repond
        updateMainTitle(error, false);
    });
};


//-----------------------------------------function to get one product's details---------------------------------------------
const productId = new URL(window.location.href).searchParams.get('id'); //get back the id from the full href address https://developer.mozilla.org/fr/docs/Web/API/URL

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

                                                            <div class="form-group">
                                                                <select class="custom-select options" required>
                                                                    <option value="">Couleurs disponibles : ${numberOfOption}</option>
                                                                </select>
                                                                <div class="invalid-feedback">Example invalid custom select feedback</div>
                                                            </div>

                                                            <a href="#!" class="btn btn-primary">Ajouter au Panier</a>
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
