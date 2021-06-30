/**
 * Représentation du format d'un Item ainsi que le formatage des prix
 */
 class Item{
    constructor(jsonItem){
        this._id = jsonItem._id
        this.description = jsonItem.description
        this.imageUrl = jsonItem.imageUrl
        this.name = jsonItem.name
        this.price = jsonItem.price / 100 // format price
        this.varnish = jsonItem.varnish
    }
}

//        jsonItem && Object.assign(this, jsonItem); //webinaire Aurélien Vaast
//      =>remplace tous les this et assigne jsonItem dans le this sans écraser l'existant
