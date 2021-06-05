
async function testServerExist(){
    await fetch(url).then((response) => {
        if (response.status >= 400 && response.status < 600) {
            alert("connection error : " + response.status + response.statusText);
            throw new Error("Bad response from server");
        }
        return response;
    }).then((returnedResponse) => {
       // Your response to manipulate
       console.log("connection OK")
    }).catch((error) => {
      // Your error is here!
      alert("Server connection failed");
      console.log(error)
    });
};

function testServerConnection(){
    fetch(url).then((response) => {
        if (response.ok) {
        return response.json();
        } else {
            alert("connection error : " + response.status + " / " + response.statusText);
            throw new Error('Something went wrong');

        }
    })
    .then((responseJson) => {
        // Do something with the response
    })
    .catch((error) => {
        alert("connection error : " + response.status + " / " + response.statusText);
        console.log(error)
    });
}