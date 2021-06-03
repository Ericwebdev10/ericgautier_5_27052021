/*
Le code HTTP. Il s’agit d’un code numérique qui vous indique comment s’est déroulée la requête. Voici les plus courants :
200 : indique que tout s’est bien passé
400 : indique que votre requête n’est pas conforme à ce qui est attendu
401 : indique que vous devez être authentifié pour faire cette requête
403 : indique que vous êtes bien authentifié mais que vous n’êtes pas autorisé à faire cette requête
404 : indique que la ressource demandée n’existe pas
500 : indique une erreur avec le service web
 */

let i = 1;

async function getDatas(){
    let result = await fetch(url);
    console.log(result);
    if (result.status == 200){
        console.log("server status OK : " + result.status);
    }else{
        console.log("server not reachable : " + result.status);
        document.getElementById("maintitle").innerHTML =   `<div class="col-lg-12 text-center text-danger bg-warning">
                                                            <h1 class="my-4">Erreur connection serveur : ${result.status}</h1>
                                                            `;
    //                                                        alert("server not reachable : " + result.status);
    }
    return result.json();
}

getDatas()
    .then(data => {
        fetch(url)
        .then( data => data.json())
        .then( jsonListArticles => {
            console.log(jsonListArticles); // debug to delete
            for (let jsonArticle of jsonListArticles) {
                let article = new Article(jsonArticle);
                console.log(i++); // debug to delete
                console.log(article); // debug to delete
                
                document.querySelector(".row").innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
                                                                <div class="card h-100">
                                                                    <a href="#!" class="stretched-link"><img class="card-img-top" src=${article.imageUrl} alt="image ourson"/></a>
                                                                    <div class="card-body">
                                                                        <h4 class="card-title"><a href="#!">${article.name}"</a></h4>
                                                                        <h5>${article.price} €</h5>
                                                                        <p class="card-text">${article.description}</p>
                                                                    </div>
                                                                    <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                                </div>
                                                            </div>
                                                            `;
            }
        });
    });

/*
fetch(url)
    .then( data => data.json())
    .then( jsonListArticles => {
        console.log(jsonListArticles); // debug to delete
        for (let jsonArticle of jsonListArticles) {
            let article = new Article(jsonArticle);
            //console.log(i++); // debug to delete
            //console.log(article); // debug to delete
             
            document.querySelector(".row").innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
                                                            <div class="card h-100">
                                                                <a href="#!" class="stretched-link"><img class="card-img-top" src=${article.imageUrl} alt="image ourson"/></a>
                                                                <div class="card-body">
                                                                    <h4 class="card-title"><a href="#!">${article.name}"</a></h4>
                                                                    <h5>${article.price} €</h5>
                                                                    <p class="card-text">${article.description}</p>
                                                                </div>
                                                                <div class="card-footer"><small class="text-muted">${article._id}</small></div>
                                                            </div>
                                                        </div>
                                                        `;
        }
    });*/