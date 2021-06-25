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
function collectItemsToPost(response) {
    let products = [];
    let i = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items array from localStorage
    arrayOfItemsInCart.forEach(itemsInCart => {                             //loop to collect items id (to post) from localStorage
        products[i] = itemsInCart._id;
        i++;
        document.querySelector(".itemslist").innerHTML += `<p class="m-1">${itemsInCart._id}</p>`
    });
    localStorage.setItem("products", JSON.stringify(products));             //set product list (to post) to localStorage                
    response = "CollectItemsToPost"
    return response;
};


//----------------------------------------- function to get localStorage content---------------------------------------------------------------
function updatePageContent() {
    let orderinfo = JSON.parse(localStorage.getItem('orderinfo'));  //get back order details from localStorage
    const orderDate = orderinfo.orderDate;
    const orderAmount = orderinfo.orderAmount;
    document.getElementById("orderDate").textContent = orderDate;   // update fields
    document.getElementById("totalAmount").textContent = "Montant TTC : " + orderAmount + " €";

    let contact = JSON.parse(localStorage.getItem('contact'));      //get back contact details from localStorage
    const lastname = contact.lastname;
    const firstname = contact.firstname;
    const address = contact.address;
    const city = contact.city;
    const zip = contact.zip;
    const email = contact.email;
                                                                    // update fields
    document.querySelector(".customerName").innerHTML = lastname + " " + firstname;
    document.querySelector(".customerAddress").innerHTML = address;
    document.querySelector(".customercity").innerHTML = zip + " " + city;    
    document.querySelector(".email").innerHTML = "Confirmation envoyé à " + email;    
};


//---------------------------------------------Sequence----------------------------------------------------------------
collectItemsToPost();
updatePageContent();
//deleteKeyInLocalStorage
//document.getElementById("orderID").textContent = "N° de commande : XYZ";

displayTotalQty();      //to clear qty in navbar