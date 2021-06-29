//----------------------------------------- Javascipt for ordersummary.html page--------------------------------------------------

//----------------------------------------- function format items for the post + add items to the summary---------------------------------------------------------------
function collectItemsToPost() {
    let products = [];
    let i = 0;
    arrayOfItemsInCart = JSON.parse(localStorage.getItem('itemsInCart'));   //get back items array from localStorage
    arrayOfItemsInCart.forEach(itemsInCart => {                             //loop to collect items id (to post) from localStorage
        products[i] = itemsInCart._id;
        i++;
        document.querySelector(".itemslist").innerHTML += `<p class="m-1">${itemsInCart.name}, ${itemsInCart.varnish}, qté : ${itemsInCart.quantity}</p>` //add items to the summary
    });
    localStorage.setItem("products", JSON.stringify(products));             //set product list (to post) to localStorage                
    
    let contact = JSON.parse(localStorage.getItem('contact'));      //get back contact details from localStorage
      const lastName = contact.lastName;
      const firstName = contact.firstName;
      const address = contact.address;
      const city = contact.city;
      const zip = contact.zip;
      const email = contact.email;

    checkDataConsitency(contact,products);
    return("Collection of items to be be posted completed");
};


//----------------------------------------- function to check data consitency before post---------------------------------------------------------------
function checkDataConsitency(contact,products) {

   let DataConsitency = true //to replace by if 
 
   if (DataConsitency === true) {
     postOrder(contact,products);
   };
     return("Data consitency validated");
 };
 

//----------------------------------------- function to POST data to server---------------------------------------------------------------
function postOrder(contact,products) {
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
updatePageContent();                                              //update order information
deleteKeyInLocalStorage();                                        //delete keys
displayTotalQty();                                                //clear qty in navbar
