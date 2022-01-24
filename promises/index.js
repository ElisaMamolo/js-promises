
//function with parameter and passing another function as parameter
//callbacks

/*without callback
function func1 () {
    console.log("Hi");
  }
  
  function func2() {
    console.log("Goodbye!");
  }
  
  func1();
  func2();
 */

/*Invoking function as callback
call the method that i am passing to the first function*/

function func1 (callback) {   // The `callback` parameter represents a function 
    console.log("Hi");
    
    callback();
  }
  
  function func2() {  
    console.log("Goodbye!");
  }
  //call function 1 and pass 2 as callback
  func1( func2 );
  

  /*example - 1 callback

  const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
  ];
  
  function getDirections(step, callback, errorCallback) {
    // setTimeout(() => {
      console.log( directions[step] );
      
      if (!directions[step]) errorCallback("Instructions not found.");
      else callback();
    // }, 2000); 
  }
  
  // Single callback
  getDirections(0, ()=> {
    getDirections(1, () => {});
  });
  
  //multiple callbacks creates callback hell - hard to maintain and understand
  // Callbacks in sequence
getDirections(0, () => {
    getDirections(1, () => {
      getDirections(2, () => {
        getDirections(3, () => {
          
          console.log("You arrived at your destination!");
          // getDirections(4, () => {}, (err) => console.log(err) ) ;
        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));

  */
  
  //Example 2: example 1 without callbacks but with promises
  //promises can be used to fix callback hell problem
  // allow us to handle the code asynchronously without blocking the main thread.

  //we have the same array

  const directions = [
    "Starting point: Ironhack Madrid",
    "➔ Turn right toward P. de la Chopera",
    "← At the roundabout, take the 1st exit onto P. de la Chopera",
    "* Lune Creperie P. de la Chopera 33, Madrid"
  ];
  
  //only takes the step as parameter
  function obtainDirections(step) {
      //create instance of a promise and pass anonymous function 
      //with resolve and reject parameter as callbacks
    return new Promise (function (resolve, reject) {
      // setTimeout(() => {
        console.log( directions[step] );
  
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
      // }, 2000); 
      
    })
  };
  
  //pass the first parameter = 0 and it will return a promise
  obtainDirections(0)
  //.then used to access the value of success run
    .then(() => obtainDirections(1) )
    .then(() => obtainDirections(2) )
    .then(() => obtainDirections(3) )
    .then(() => console.log("You arrived at your destination!") )
    //call reject
    .catch((err) => console.log(err));
  

//promise is an object returned that tell us if operation 
//is successful or has thrown an error

//create a promise using promise constructor
//takes an anonymouse/arrow function with 2 callback 
//function as parameter
/*
const myPromise = new Promise( (resolve, reject) => {
    if () {
       resolve();  // fulfilled successfully
    }
    else {
       reject();  // error, rejected
    }
 });
 */


//promise has multiple states 
//when created is in pending state until it is fulfilled or rejected
//fulfilled when the resolve() is called the Promise goes to a fulfilled state.
//Rejected. When the reject() is called, or if an Error is thrown, the Promise becomes rejected.

//A Promise can only be “settled” (meaning it has been fulfilled or rejected) once.

//We use the methods promise.then() and promise.catch() to associate further actions
//These actions will run when the promise becomes settled.

//each time we call a .then method that returns another pending promise


const pr1 = new Promise((resolve, reject) => {
    /*
    setTimeout(() => {
      resolve("Ironhack");
    }, 2000);*/
    setTimeout(() => {
        reject("Rejected!"); // <== This value will be passed to catch()
    }, 2000);
  });
  
  
  pr1
    .then((val) => console.log("Resolved with: ", val))
  
    //To handle a rejected Promise - we attach the .catch() method to the Promise.
    .catch((err) => console.log("catch() -> ", err));

    const pr4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Ironhack"), 2000);
      });
      
      const pr4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Rejected!"); // <== This value will be passed to catch()
        }, 2000);
      });     
      pr4
        .then(() => {
          console.log("1. then()");
        })
        .then(() => {
          console.log("2. then()");
          throw new Error("Something went wrong");     // <= Throw an Error
        })
        .then(() => {                                  // <= This block is skipped
          console.log("3. then()");
        })
        .catch((err) => console.log("catch() -> ", err));
      

        //multiple catch scenario -> catch returns a promise
        const pr7 = new Promise((resolve, reject) => {
            setTimeout(() => resolve("A"), 2000);
          });
          
          
          pr7
            .then((value1) => {
              console.log("1. then(): ", value1);  
              throw new Error("FIRST ERROR");
            })
            .catch((err) => {
              console.error("1. catch(): ", err);
              return "Hello from catch";
            })
            //if previous catch is fullfilled go here
            .then((value2) => {
              console.log("2. then(): ", value2);
              throw new Error("SECOND ERROR");
            })
            //catch the error that has been just thrown
            .catch((err) => {
              console.error("2. catch(): ", err);
            });


// finally() method is used to do final processing or cleanup once the promise is settled, regardless of its outcome. The finally() block always runs the last
//regardless of the promise being resolved or rejected.

const pr8 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("A"), 2000);
  });
  
  
  pr8
    .then((value1) => console.log("1. then()"))
    .then((value2) => console.log("2. then()"))
    .finally(() => {
      console.log("finally()");
    });


    //promise.all when all promises are all finished i want to run a certain code
    //takes an array of all promises as argument

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("foo"), 1000);
      });
      
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1337), 2000);
      });
      
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve( { name: "Bob" } ), 4000);
      });
      
    //when all promisses are resolved and fulfilled, we see the values
    Promise.all([p1, p2, p3])
  .then((values) => console.log("values", values))
  .catch((err)=> console.log("catch()", err));
      