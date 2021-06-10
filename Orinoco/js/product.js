//-----------------------------------------Javascipt for product.html page------------------------------------------

//-----------------------------------------function get product details----------------------------------------------------
let productId = new URL(window.location.href).searchParams.get('id');

function getProductDetails(){
    fetch(url + "/" + productId)
    .then( data => data.json())
    .then( article => {
        console.log(article); // debug to delete       
        numberOfOption = article.varnish.length;   
        document.querySelector(".row").innerHTML += `<div class="col-lg-6 col-md-6 mb-4 text-center mx-auto">
                                                        <div class="card h-100">
                                                            <a href="product.html?id=${article._id} "class=""><img class="card-img-top" src=${article.imageUrl} alt="image objet"/></a>
                                                            <div class="card-body">
                                                                <h4 class="card-title">${article.name}"</h4>
                                                                <h5 class="text-right">${article.price/100} €</h5>
                                                                <p class="card-text">${article.description}</p>

                                                                <div class="form-group">
                                                                    <select class="custom-select options" required>
                                                                        <option value="">${numberOfOption} Couleurs / options </option>
                                                                    </select>
                                                                    <div class="invalid-feedback">Example invalid custom select feedback</div>
                                                                </div>

                                                                <a href="#!" class="btn btn-primary">Ajouter au Panier</a>
                                                            </div>
                                                            <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                        </div>
                                                    </div>`;

        //loop to add options
        ArticleOption = "";
        j = 0; 
//        console.log(article.varnish.length); // debug to delete
//        console.log(article.varnish); // debug to delete
        for (let ArticleOption of article.varnish) {                                      
//            console.log("debug product id" + j + " " + ArticleOption); // debug to delete
            document.querySelector(".options").innerHTML += `<option value="${j}">${ArticleOption}</option>`;
            ArticleOption++;
            j++;
        };
    });
};

getProductDetails();
displaySpecialOffer(true);              //show banner (true / false)

