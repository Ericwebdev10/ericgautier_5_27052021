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

*/
