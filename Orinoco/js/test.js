
async function testServerConnection(){
    await fetch(url).then((response) => {
        //if (response.status >= 400 && response.status < 600)
        if (response.status !=200) {
            document.getElementById("mainTitle").innerHTML =   `<div class="col-lg-12 text-center text-danger bg-warning">
                                                            <h1 class="my-4">Erreur connection : ${result.status} ${result.statusText}</h1>
                                                            `;                                      
            console.log("erreur dans le if  => " + response.status + response.statusText);
            alert("connection error : " + response.status + response.statusText);
            throw new Error("Bad response from server",);
        }
        return response;
    }).then((returnedResponse) => {
       // Your response to manipulate
       console.log("connection OK")
       getDatas();
    }).catch((error) => {
      // Your error is here!
      document.getElementById("mainTitle").innerHTML =   `<div class="col-lg-12 text-center text-danger bg-warning">
      <h1 class="my-4">Erreur connection : ${error}</h1>
      `;
      alert("Server connection failed");
      console.log("erreur dans le .catch => " + error)
    });
};