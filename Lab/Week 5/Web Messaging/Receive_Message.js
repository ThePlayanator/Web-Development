var messageEventHandler = function(event){
 // check that the origin is one we want.
 if(event.origin == 'https://www.tutorialspoint.com'){
 alert(event.data);
}
}
window.addEventListener('message', messageEventHandler,false);