//-----------------------------------------Javascipt for product.html page------------------------------------------

//-----------------------------------------function get product details----------------------------------------------------
let productId = new URL(window.location.href).searchParams.get('id');

function getProductDetails(){
    fetch(url + "/" + productId)
    .then( data => data.json())
    .then( article => {
        console.log(article); // debug to delete            
        document.querySelector(".row").innerHTML += `<div class="col-lg-6 col-md-6 mb-4 text-center">
                                                        <div class="card h-100">
                                                            <a href="product.html?id=${article._id} "class=""><img class="card-img-top" src=${article.imageUrl} alt="image objet"/></a>
                                                            <div class="card-body">
                                                                <h4 class="card-title"><a href="#!">${article.name}"</a></h4>
                                                                <h5 class="text-right">${article.price/100} €</h5>
                                                                <p class="card-text">${article.description}</p>

                                                                <div class="form-group options">
                                                                
                                                                </div>

                                                                <a href="#!" class="btn btn-primary">Ajouter au Panier</a>
                                                            </div>
                                                            <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                        </div>
                                                    </div>`;

//loop to add options
        document.querySelector(".options").innerHTML += `<select class="custom-select" required>
                                                            <option value="">Couleurs / options </option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <div class="invalid-feedback">Example invalid custom select feedback</div>
                                                        `;
        });
};

getProductDetails();
displaySpecialOffer(true);              //show banner (true / false)

