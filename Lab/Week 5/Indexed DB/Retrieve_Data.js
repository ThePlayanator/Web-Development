function read() {
 var transaction = db.transaction(["employee"]);
 var objectStore = transaction.objectStore("employee");
 var request = objectStore.get("00-03");
 
 request.onerror = function(event) {
 alert("Unable to retrieve daa from database!");
 };
 
 request.onsuccess = function(event) {
 if(request.result) {
 alert("Name: " + request.result.name + ", Age: " + request.result.age 
+ ", Email: " + request.result.email);
 }
 
 else {
 alert("Kenny couldn't be found in your database!"); 
 }
 };
}