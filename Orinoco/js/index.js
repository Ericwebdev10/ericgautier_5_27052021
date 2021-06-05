//-----------------------------------------Javascipt for index.html page----------------------------------------------------

testServerExist()
//testServerConnection();


let i = 1; // debug to delete



//-----------------------------------------check server status----------------------------------------------------
async function getDatas(){
    let result = await fetch(url);
    console.log(result);
    if (result.status == 200){
        console.log("server status OK : " + result.status); // debug to delete
    }else{
        console.log("server not reachable : " + result.status); // debug to delete
        document.getElementById("mainTitle").innerHTML =   `<div class="col-lg-12 text-center text-danger bg-warning">
                                                            <h1 class="my-4">Erreur connection : ${result.status}</h1>
                                                            `;
        alert("connection error : " + result.status);
    }
    return result.json();
}

//function serverConnectionFail

getDatas()
    .then(data => { //?
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
                                                                    <a href="#!" class="stretched-link"><img class="card-img-top" src=${article.imageUrl} alt="image objet"/></a>
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
    