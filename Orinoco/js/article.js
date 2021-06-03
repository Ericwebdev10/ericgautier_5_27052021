/**
 * Représentation du format d'un article ainsi que le formatage des prix
 */
 class Article{
    constructor(jsonArticle){
        this._id = jsonArticle._id
        this.description = jsonArticle.description
        this.imageUrl = jsonArticle.imageUrl
        this.name = jsonArticle.name
        this.price = jsonArticle.price / 100 // format price
        this.varnish = jsonArticle.varnish
    }
}

//        jsonArticle && Object.assign(this, jsonArticle); //webinaire Aurélien Vaast
//      =>remplace tous les this et assigne jsonArticle dans le this sans écraser l'existant
