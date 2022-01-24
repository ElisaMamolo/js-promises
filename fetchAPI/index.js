//fetch API is a browser interface used to make http request in asynch manner
//fetch now uses promises so no need for callbacks

//API -> application programming interface, a program
//provides functionality, can be accessed by other program or system


//REST API is a server on a network that provides data upon request


// fetch() method takes url of the resource, our API
// index.js
/*
fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => { 
    return response.json();
  })
  .then((data) => {
    console.log("Parsed response: ", data);
  })
  .catch( (err) => console.log(err));
*/

// index.js
//use fetch to get resources, fetch returns a promise
fetch("https://api.spacexdata.com/v4/launches")
//promise can be fulfilled (.then() )
  .then((response) => response.json())
  .then((data) => {

  data.forEach((launchObj) => {
    const patchImage = launchObj.links.patch.small;
    const imgElement = document.createElement("img");

    imgElement.setAttribute("src", patchImage);
    imgElement.setAttribute("width", 200);
    document.body.appendChild(imgElement);
  });
//or rejected
}).catch((err) => console.log(err));
