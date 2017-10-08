// CLOSURES
// In Javascript, functions are not just functions... they are also closures.
// What that means is that the function body has access to variables that are
// defined outside of the function.

// // Look how the 'me' variable is defined outside the function scope, but is still usable.
// // We do not pass in the variable, simply call it and this is because javascript supports closures.
// var me = 'Bruce Wayne';
// function greetMe() {
//     console.log('Hello, ' + me + '!');
// }
// greetMe();

// // In a language that does not support closures we would have to pass in the variable like so:
// function greetMe(me) {
//     console.log('Hello, ' + me + '!');
// }
// greetMe('Bruce Wayne');

// // the function truly does have access to the variable and does not snapshot or copy the value of the variable. 
// // For example, if we change the value of variable me, the function will use the new value.
// var me = 'Bruce Wayne';
// function greetMe() {
//     console.log('Hello, ' + me + '!');
// }
// me = 'Batman';
// greetMe();

// // Here is one example that illustrates why closures are useful (this function will not run, just imagine the execution).
// function sendRequest() {
//     var requestID = '123';
//     $.ajax({
//         url: '/myUrl',
//         success: function(response) {
//             alert('Request ' + requestID + ' returned')
//         }
//     });
// }
// // The above function really illustrates a good use of closures. In that case, you started a task and you want to specify something that
// // happens when that task is done, but also use stuff that is available to you when you start the task (like the requestID in the ex above).