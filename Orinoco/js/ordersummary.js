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

//----------------------------------------- function to get and format localStorage content to be posted---------------------------------------------------------------
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


//----------------------------------------- function to update order information---------------------------------------------------------------
function updatePageContent() {
    let orderinfo = JSON.parse(localStorage.getItem('orderinfo'));  //get back order details from localStorage
    const orderDate = orderinfo.orderDate;
    const orderAmount = orderinfo.orderAmount;
    document.getElementById("orderDate").textContent = orderDate;   // update fields
    document.getElementById("totalAmount").textContent = "Montant TTC : " + orderAmount + " €";

    let contact = JSON.parse(localStorage.getItem('contact'));      //get back contact details from localStorage
    const lastName = contact.lastName;
    const firstName = contact.firstName;
    const address = contact.address;
    const city = contact.city;
    const zip = contact.zip;
    const email = contact.email;
                                                                    // update fields
    document.querySelector(".customerName").innerHTML = lastName + " " + firstName;
    document.querySelector(".customerAddress").innerHTML = address;
    document.querySelector(".customercity").innerHTML = zip + " " + city;    
    document.querySelector(".email").innerHTML = "Confirmation envoyé à " + email;    
};


//----------------------------------------- function to check data consitency before post---------------------------------------------------------------
function checkDataConsitency(response) {
 //regex
  let DataConsitency = true

  if (DataConsitency === true) {
    postOrder(true);
  };
    return response;
};


//----------------------------------------- function to POST data to server---------------------------------------------------------------
function postOrder(response) {
  let contact = JSON.parse(localStorage.getItem('contact'));      //get back contact details from localStorage
    const lastName = contact.lastName;
    const firstName = contact.firstName;
    const address = contact.address;
    const city = contact.city;
    const zip = contact.zip;
    const email = contact.email;

  let products = JSON.parse(localStorage.getItem('products'));   //get back products id list from localStorage               

  fetch(url + "/order", {
      method: "POST",
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({contact, products})
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
//      console.log(value.orderId);                               //debug to delete
        document
          .getElementById("orderID")
          .innerText = "N° : " + value.orderId;
          response = "PostOrder completed";
          return response;
    })
    .catch((error) => {                                           // Catch error
      updateConnectionMessage(error, false);
      response = "function PosterOrder " + error;
      return response;
  });
};

//----------------------------------------- function to delete keys in localStorage---------------------------------------------------------------
function deleteKeyInLocalStorage(response){
  localStorage.removeItem('totalItemsInCart');
  localStorage.removeItem('itemsInCart');
  localStorage.removeItem('contact');
  localStorage.removeItem('orderinfo');
  localStorage.removeItem('products');

  response = "LocalStorage Keys deleted";
  return response;
};


//---------------------------------------------Sequence----------------------------------------------------------------
collectItemsToPost();                                             //prepare data
checkDataConsitency();                                            //check data before post
updatePageContent();                                              //update order information
deleteKeyInLocalStorage();                                        //delete keys
displayTotalQty();                                                //clear qty in navbar
