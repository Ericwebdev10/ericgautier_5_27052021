//----------------------------------------- Javascipt for ordersummary.html page--------------------------------------------------
/*router.post('/order', furnitureCtrl.orderFurniture);

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
//----------------------------------------- function to get localStorage content---------------------------------------------------------------

function CollectItemsToPost(response) {
    let products = [];
    let i = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items array from localStorage
    arrayOfItemsInCart.forEach(itemsInCart => {                             //loop to collect items id (to post) from localStorage
        products[i] = itemsInCart._id;
        i++;
//        console.log("debug id2 " + products);  //debug to delete
    });
    localStorage.setItem("products", JSON.stringify(products));             //set product list (to post) to localStorage                
    response = "CollectItemsToPost"
    return response;
//    console.log("debug id2 " + response);      //debug to delete    
};

//---------------------------------------------Sequence----------------------------------------------------------------
displayTotalQty();
CollectItemsToPost();