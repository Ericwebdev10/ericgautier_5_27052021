/*
Le code HTTP est un code numérique qui indique comment s’est déroulée la requête :
200 : indique que tout s’est bien passé
400 : indique que votre requête n’est pas conforme à ce qui est attendu
401 : indique que vous devez être authentifié pour faire cette requête
403 : indique que vous êtes bien authentifié mais que vous n’êtes pas autorisé à faire cette requête
404 : indique que la ressource demandée n’existe pas
500 : indique une erreur avec le service web

1xx informational response – the request was received, continuing process
2xx successful – the request was successfully received, understood, and accepted
3xx redirection – further action needs to be taken in order to complete the request
4xx client error – the request contains bad syntax or cannot be fulfilled
5xx server error – the server failed to fulfil an apparently valid request
 */


/*
<   inférieur à ;
<=   inférieur ou égal à ;
==   égal à ;
>=   supérieur ou égal à ;
>   supérieur à ;
!=   différent de.

l'égalité simple vérifie la valeur, mais pas le type. Donc ceci renvoie la valeur true  :
5 == "5"

par contre, l'égalité stricte vérifie à la fois la valeur et le type. Donc :
5 === "5"
renvoie   false  , car on compare un   number  à une   string  .

De même, il y a deux opérateurs d'inégalité,   !=  et   !==  , avec la même distinction.

&&  – ET logique – pour vérifier si deux conditions sont toutes les deux vraies ;
||    – OU logique – pour vérifier si au moins une condition est vraie ;
!    – NON logique – pour vérifier si une condition n'est pas vraie. 



//      alert("Server connection failed");


https://developer.mozilla.org/fr/docs/Web/API/URL
var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("id")); // 123

                                                            <div class="form-group">
                                                                <select class="custom-select options" required>
                                                                    <option value="">Couleurs disponibles : ${numberOfOption}</option>
                                                                </select>
                                                                <div class="invalid-feedback">Example invalid custom select feedback</div>
                                                            </div>

inputs form
https://getbootstrap.com/docs/4.3/components/forms/#range-inputs

*/

/* //https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, "blabla");
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
};
function test(){
    if (storageAvailable('localStorage')) {
        // Nous pouvons utiliser localStorage
    }
    else {
        // Malheureusement, localStorage n'est pas disponible
    };
};
function handleLocalStorage(){
    if(!localStorage.getItem('bgcolor')) {
        populateStorage();
    } else {
        setStyles();
    };
};
function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');

};

    a = [
        {prop1:"abc",prop2:"qwe"},
        {prop1:"bnmb",prop2:"yutu"},
        {prop1:"zxvz",prop2:"qwrq"}];
          
      index = a.findIndex(x => x.prop2 ==="yutu");
      
      console.log(index);

//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

//https://stackoverflow.com/questions/61566445/point-out-the-current-dom-class-being-used-in-js

//https://developer.mozilla.org/fr/docs/Web/API/Location/reload

https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript

Test unitaire
https://register.gotowebinar.com/recording/8611771306467974406


router.get('/', furnitureCtrl.getAllFurniture);
router.get('/:id', furnitureCtrl.getOneFurniture);
router.post('/order', furnitureCtrl.orderFurniture);

* Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id

*/


