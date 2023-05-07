/**
 * PROMISE CONSTRUCTOR (Resolve with onFulfilled callback argument )
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 * Create a promise with a constructor that follows the requirements:
 * * Has a name of 'getPromise'
 * * The promise is resolved (fulfilled) with a message of 'The PROMISE was RESOLVED' in 1 second.
 * * (setTimeout function usage is required)
 * After the promise is settled do the following:
 * * Using .then() syntax with onFulfilled callback argument:
 * * * log the resolved promise value
 * * * Return the value
 * The getPromise must be exported
 * Example: export const getPromise = <Your promise constructor code>
 *          getPromise.then(<Your onFulfilled callback code>)
 */

// Your code goes here
export const getPromise = new Promise((fulfilled, unfulfilled) => {
   setTimeout(() => {
      fulfilled('The PROMISE was RESOLVED');
   }, 1000)
});

getPromise 
   .then((onFulfilled) => {
      console.log(onFulfilled);
      return onFulfilled;
   });


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
