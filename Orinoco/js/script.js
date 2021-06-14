//-----------------------------------------function display banner----------------------------------------------------

function displaySpecialOffer(visible){
    if (visible === true) {
    document.querySelector(".row").innerHTML += `<div class="col-lg-12 text-center alert alert-info alert-dismissible fade show mt-5 pt-5 shadow-lg" role="alert">
                                                    <h5 class="alert-heading">Offre spéciale : -20% avec le code Orinoco20</h5>
                                                    <p> + Livraison offerte !!! </p>
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>`;
    }
};


//-----------------------------------------function display title----------------------------------------------------

function displayTitle(visible){
    if (visible === true) {
    document.querySelector(".row").innerHTML += `<div class="col-lg-12 text-center">
                                                    <h1 id="mainTitle" class="my-4">Découvrez notre nouvelle collection!</h1>
                                                </div>`;
    }
};


//-----------------------------------------function to handle title error-------------------------------------
function updateMainTitle(error, clear){
    if (clear === true){
        document.getElementById("mainTitle").innerHTML =    `<h1 class="my-4"></h1>`; // clear default text "connection en cours..."

    }else {
        document.getElementById("mainTitle").innerHTML =    `<div class="col-lg-12 text-center text-danger bg-warning">
                                                        <h1 class="my-4">Erreur connection => ${error}</h1>`;
    };
};

