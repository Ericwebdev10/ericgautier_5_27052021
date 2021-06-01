/*
Le code HTTP. Il s’agit d’un code numérique qui vous indique comment s’est déroulée la requête. Voici les plus courants :
200 : indique que tout s’est bien passé
400 : indique que votre requête n’est pas conforme à ce qui est attendu
401 : indique que vous devez être authentifié pour faire cette requête
403 : indique que vous êtes bien authentifié mais que vous n’êtes pas autorisé à faire cette requête
404 : indique que la ressource demandée n’existe pas
500 : indique une erreur avec le service web
 */


fetch("http://localhost:3000/api/teddies")
    .then( data => data.json())
    .then( jsonListArticle => {
        console.log(jsonListArticle);
        for (let jsonArticle of jsonListArticle) {
            let article = new Article(jsonArticle);
            document.querySelector(".row").innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
                                                            <div class="card h-100">
                                                                <a href="#!"><img class="card-img-top" src=${article.imageUrl} alt=${article.imageUrl} width="150"/></a>
                                                                <div class="card-body">
                                                                    <h4 class="card-title"><a href="#!">${article.name}"</a></h4>
                                                                    <h5>${article.price/100} €</h5>
                                                                    <p class="card-text">${article.description}</p>
                                                                </div>
                                                                <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                            </div>
                                                        </div>
                                                        `;
        }
    });