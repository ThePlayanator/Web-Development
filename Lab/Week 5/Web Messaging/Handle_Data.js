var loadHandler(){
 // Define our message handler function
 var messageHandler = function(messageEvent){
 
 // Our form submission handler
 var formHandler = function(){
 var msg = 'add <foo@example.com> to game circle.';
 messageEvent.ports[0].postMessage(msg);
 }
 document.forms[0].addEventListener('submit',formHandler,false);
 }
 window.addEventListener('message',messageHandler,false);
}
window.addEventListener('DOMContentLoaded',loadHandler,false);