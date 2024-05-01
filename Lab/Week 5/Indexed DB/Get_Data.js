function readAll() {
 var objectStore = db.transaction("employee").objectStore("employee");
 
 objectStore.openCursor().onsuccess = function(event) {
 var cursor = event.target.result;
 
 if (cursor) {
 alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age + ", Email: " + cursor.value.email);
 cursor.continue();
 }
 
 else {
 alert("No more entries!");
 }
 };
}
