var loadHandler = function(){
 var iframes, messageHandler;
 
 iframes = window.frames;
 messageHandler = function(messageEvent){
 if( messageEvent.ports.length > 0 ){
 // transfer the port to iframe[1]
 
iframes[1].postMessage('portopen','http://foo.example',messageEvent.ports);
 }
 }
 window.addEventListener('message',messageHandler,false);
}
window.addEventListener('DOMContentLoaded',loadHandler,false);