//----------------------------------------- Javascipt for index.html page--------------------------------------------------

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
        updateConnectionMessage(returnedResponse, true);//clear title
        displayAllDatas(returnedResponse);      //populate template
        displaySpecialOffer(true);              //show banner (true / false)
        displayTitle(true);                     //show title (true / false)
    })
    .catch((error) => {                         // Catch error when server does not repond
        updateConnectionMessage(error, false);
    });
};


//-----------------------------------------function to display all Items----------------------------------------------------
function displayAllDatas(){
    fetch(url)
    .then( data => data.json())
    .then( jsonListItems => {
//        console.log(jsonListItems); // debug to delete            
        for (let jsonItem of jsonListItems) {
            let item = new Item(jsonItem);
            createCard(item);            
        }
    });
};

//-----------------------------------------function to create cards with Item's details-------------------------------------
function createCard(Item){
    document.querySelector(".row").innerHTML += 
        `<div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="product.html?id=${Item._id} "class="stretched-link"><img class="card-img-top card_image__fit" src=${Item.imageUrl} alt="image objet"/></a>
                <div class="card-body">
                    <h4 class="card-title"><a href="#!">${Item.name}"</a></h4>
                    <h5 class="text-right">${Item.price} €</h5>
                    <p class="card-text">${Item.description}</p>
                </div>
                <div class="card-footer"><small class="text-muted">${Item._id}</small></div>
            </div>
        </div>`;
};


//---------------------------------------------Sequence----------------------------------------------------------------
testServerConnection();
