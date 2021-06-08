//-----------------------------------------Javascipt for index.html page------------------------------------------

//-----------------------------------------Check server connection----------------------------------------------------

async function testServerConnection(){
    await fetch(url).then((response) => {
        if (response.status === 200) {     //server response is OK = 200 
            console.log("debug id1 " + response.status + " " + response.statusText); // debug to delete
       }else{                          //server response is NOT 200
            console.log("debug id2 " + response.status + " " + response.statusText); // debug to delete
            throw new Error(response.status + " " + response.statusText);
         }
        return response;
    })
    .then((returnedResponse) => {     // Connection OK
        document.getElementById("mainTitle").innerHTML =    `<h1 class="my-4"></h1>`; // clear text
        console.log("debug id3 connection OK") // debug to delete
//       getDatas();
    })
    .catch((error) => {               // Catch error when server does not repond
        document.getElementById("mainTitle").innerHTML =    `<div class="col-lg-12 text-center text-danger bg-warning">
                                                            <h1 class="my-4">Erreur connection => ${error}</h1>`;
        console.log("debug id4 .catch => " + error) // debug to delete
    });
};

testServerConnection();


//-----------------------------------------get all data----------------------------------------------------


async function getDatas(){
    let result = await fetch(url);
    //console.log(result);
    if (result.status == 200){
        console.log("getDatas : " + result.status); // debug to delete
    }else{
        console.log("getDatas : " + result.status); // debug to delete

    }
    return result.json();
}


let i = 1; // debug to delete

getDatas()
    .then(data => { //?
        fetch(url)
        .then( data => data.json())
        .then( jsonListArticles => {
//            console.log(jsonListArticles); // debug to delete
            document.querySelector(".row").innerHTML += `<div class="col-lg-12 text-center alert alert-info alert-dismissible fade show mt-3 shadow-lg" role="alert">
                                                            <h5 class="alert-heading">Offre spéciale : -20% avec le code Orinoco20</h5>
                                                            <p> + Livraison offerte !!! </p>
                                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                        <div class="col-lg-12 text-center">
                                                            <h1 id="mainTitle" class="my-4">Découvrez notre nouvelle collection!</h1>
                                                        </div>
                                                        `

            for (let jsonArticle of jsonListArticles) {
                let article = new Article(jsonArticle);
//                console.log(i++); // debug to delete
//                console.log(article); // debug to delete
                
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
    