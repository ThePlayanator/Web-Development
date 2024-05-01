xhr.onload = function() {
 var responseText = xhr.responseText;
 
 // process the response.
 console.log(responseText);
};
xhr.onerror = function() {
 console.log('There was an error!');
};