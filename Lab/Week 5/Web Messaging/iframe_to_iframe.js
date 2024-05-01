var loadHandler = function(){
 var mc, portMessageHandler;
 mc = new MessageChannel();
 
window.parent.postMessage('documentAHasLoaded','http://foo.example',[mc.port2])
;
 
 portMessageHandler = function(portMsgEvent){
 alert( portMsgEvent.data );
}
 
 mc.port1.addEventListener('message', portMessageHandler, false);
HTML5
161
 mc.port1.start();
}
window.addEventListener('DOMContentLoaded', loadHandler, false);
