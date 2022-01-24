//keywords to have better syntax when using promises
//allow us to suspend the execution of the code while we await for asynchronous code to finish.

//transforms any function to have a value be wrapped in a promise
// Async function syntax
async function someFunction() {
    return true;
  }
  
  someFunction()
    .then((value) => console.log(value)); // true

// Async arrow function syntax
const myFunc = async () => {}

//if i use async i can use also await


const directions = [
    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
  ];
  
  //create new function
  function obtainDirections(step) {
    // have a new promise returned
    return new Promise ( (resolve, reject) => {
      // setTimeout(() => {
        console.log( directions[step] );
  
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      // }, 2000); 
      
    })
  }
  
  //we use async keyword and await
  async function getCoffee() {
    await obtainDirections(0);
    await obtainDirections(1);
    await obtainDirections(2);
    await obtainDirections(3);
    console.log("You arrived at your destination!");
  }
  
  getCoffee();
  

  /*With await we can resolve a Promise and access the 
  resolved data directly, having our code looking like 
  synchronous code, without the need to chain then() or catch().  
  
We need error handling  
In async functions, rejected Promises and Errors are handled by using the try...catch block.
The try block is where we execute the code.
The catch block is used for handling Errors and rejections.*/

  
  function obtainDirections(step) {
    return new Promise ( (resolve, reject) => {
      // setTimeout(() => {
        console.log( directions[step] );
  
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      // }, 2000); 
      
    })
  }
  
  async function getCoffee() {
    try {
      await obtainDirections(0);
      await obtainDirections(1);
      await obtainDirections(2);
      await obtainDirections(3);
      
      console.log("You arrived at your destination!");
    } catch(err) {
      console.log(err)
    } 
  }
  
  getCoffee();
  

  //fetch and async/await
  //fetch with promises

  fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => { 
    return response.json();
  })
  .then((jsonResponse) => {
    console.log("Parsed response: ", jsonResponse);
  })
  .catch((err) => console.log("Something went wrong!", error));


  //fetch with async/await
  async function displayMissionPatches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const jsonResponse = await response.json();
  
      console.log("Parsed response: ", jsonResponse);
    } catch (err) {
      // Handle error or a rejected Promise
      console.log("Something went wrong!", error);
    }
  }
  
  displayMissionPatches();
  
/*
The async and await keywords enable asynchronous, promise-based
behavior to be written in a cleaner style, avoiding the need to 
explicitly configure promise chains. In addition, async and await
act as “syntactic sugar” that serves to provide a cleaner, more linear syntax for working with Promises.
*/