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
    let contact = JSON.parse(localStorage.getItem('contact'));              //get back contact details from localStorage
    checkDataConsitencyBeforePost(contact,products);                        //call function to check data consitency
    return("Collection of items to be be posted completed");
};


//----------------------------------------- function to check again data consitency before post to avoid corrupted data------------------------
function checkDataConsitencyBeforePost(contact,products) {
//    contact.lastName = contact.lastName + "@"                           //only for test purposes
    if (isValidName(contact.lastName) && isValidName(contact.firstName) 
      && isValidAddress(contact.address) && isValidCity(contact.city) 
      && isValidZip(contact.zip) && isValidEmail(contact.email)) {
        postOrder(contact,products);                                      //post order to get order id
        return("Data consitency validated");
    }else {
        let error = "données utilisateur corrompues";
        updateConnectionMessage(error, false);
        alert(error);
        return("Data corrupted");
    }
};
 

//----------------------------------------- function to POST data to server---------------------------------------------------------------
async function postOrder(contact,products) {
    await fetch(url + "/order", {
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
            updatePageContent(contact);                           //update order summary
            deleteKeyInLocalStorage();                            //delete keys
            displayTotalQty();                                    //clear qty in navbar
    
            response = "PostOrder completed " + value.orderId;
            return response;
    })
    .catch((error) => {                                           // Catch error
        updateConnectionMessage(error, false);
        response = "PostOrder NOT possible" + error;
        return response;
    });
};


//----------------------------------------- function to update order information---------------------------------------------------------------
function updatePageContent(contact) {
    let orderinfo = JSON.parse(localStorage.getItem('orderinfo'));            //get back order details from localStorage
    document.getElementById("orderDate").textContent = orderinfo.orderDate;   // update fields
    document.getElementById("totalAmount").textContent = "Montant TTC : " + orderinfo.orderAmount + " €";
    document.getElementById("deliveryCost").textContent = "Livraison : 0 €";
    document.getElementById("paymentMeans").textContent = "VISA **** 9876";                                                                    
    document.querySelector(".customerName").innerHTML = contact.lastName + " " + contact.firstName;
    document.querySelector(".customerAddress").innerHTML = contact.address;
    document.querySelector(".customercity").innerHTML = contact.zip + " " + contact.city;    
    document.querySelector(".email").innerHTML = "Confirmation envoyée à " + contact.email; 
    
    var deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    document.getElementById("deliveryDate").textContent = "Livraison prévu le " + deliveryDate.toLocaleDateString();  
    return("page updated");   
};


//----------------------------------------- function to delete keys in localStorage---------------------------------------------------------------
function deleteKeyInLocalStorage(){
  localStorage.removeItem('totalItemsInCart');
  localStorage.removeItem('itemsInCart');
  localStorage.removeItem('contact');
  localStorage.removeItem('orderinfo');
  localStorage.removeItem('products');
  return("LocalStorage Keys deleted");
};


//---------------------------------------------Sequence----------------------------------------------------------------
collectItemsToPost();                                             //prepare data

