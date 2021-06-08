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
                                                            <a href="product.html?id=${article._id} "class="stretched-link"><img class="card-img-top" src=${article.imageUrl} alt="image objet"/></a>
                                                            <div class="card-body">
                                                                <h4 class="card-title"><a href="#!">${article.name}"</a></h4>
                                                                <h5 class="text-right">${article.price/100} €</h5>
                                                                <p class="card-text">${article.description}</p>
                                                            </div>
                                                            <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                        </div>
                                                    </div>`;
        });
};

getProductDetails();
