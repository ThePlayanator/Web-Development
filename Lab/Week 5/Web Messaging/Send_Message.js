var iframe = document.querySelector('iframe');
var button = document.querySelector('button');
var clickHandler = function(){

 iframe.contentWindow.postMessage('The message to 
send.','https://www.tutorialspoint.com);
}
button.addEventListener('click',clickHandler,false);
