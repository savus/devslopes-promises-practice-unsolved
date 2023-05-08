/**
 * PROMISE ERROR HANDLER
 * Please, make sure to read the "09 An-important-rule.md" file in exercises-info folder
 */


/**
 * @task
 * Create a function `iterate` that prints the first function argument 
 * (an integer) to it and then returns that argument + 1
 * The function must be exported
 */

export function iterate(arg) {
  // Your code goes here...
  console.log(arg);
  return arg + 1;
}

/**
 * @task
 * Create a function `alwaysThrows` that throws an `Error` with a message of "OH NOES"
 * The function must be exported
 */

export function alwaysThrows() {
  // Your code goes here...
  /*
    Spent hours trying to interpret what 'throw' and 'error' meant
    when the .reject() method, console.log() method, and 'return' didn't work.
    Had to research 'throw' keyword. Couldn't understand expectations of
    "expect(alwaysThrows).toThrow(new Error('OH NOES'));" error message until
    this combination finally worked.
  */
  throw new Error('OH NOES');
}

/**
 * @task
 * Create a function `onReject` that 
 * * Takes an argument that can be either error object or a string value
 * * Logs the error object message property value in the console if the argument is an object
 * * Logs the argument value in the console in any other case
 * The function must be exported
 */

export function onReject(arg) {
  // Your code goes here...
  console.log(`${(typeof arg === 'object') ? arg.message : arg}`);
}

/**
 * @task
 * Create a promise variable that follows the list:
 * * Stores the resolved promise using `Promise.resolve`
 * * Wraps your iterate method, then a series of iterations that attempts to perform `iterate` a total of 10 times.
 * * Attach a rejection handler at the bottom of your chain to print the
 * `error.message` using `console.log` with the onReject function
 * * Insert a call to `alwaysThrows` after your 5th call of `iterate`
 * If everything was done correctly the promise will:
 * * log (1, 2, 3, 4, 5)
 * * throw an error that will be handled by the catch() block and log the error message
 * Example: export const promise = Promise.resolve(<Your_resolved_code>)
 *                                  .then(<First_async_iterate_call>)
 *                                  .then(<Second_async_iterate_call>)
 *                                  .then(<Nth_async_iterate_call>)
 *                                  .then(<alwaysThrows_async_call>)
 *                                  .then(N+1_sync_iterate_call)
 *                                  .catch(<Your_error_catching_code>)
 * !!! HINT: It is OK to have a lot of .then() code blocks.
 */

// Your code goes here...
export const promise = Promise.resolve((res) => res)
  .then((first) => iterate(0)) // <-- This passes whether it starts at 1 or 0 [0, 1, 2, 3, 4, OH NOES] => passed
  .then((second) => iterate(second))
  .then((third) => iterate(third))
  .then((fourth) => iterate(fourth))
  .then((fifth) => iterate(fifth))
  .then((afterFifth) => alwaysThrows())
  .then((sixth) => iterate(5))
  .then((seventh) => iterate(seventh))
  .then((eighth) => iterate(eighth))
  .then((ninth) => iterate(ninth))
  .then((tenth) => iterate(tenth))
  .catch((err) => onReject(err));
  
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
