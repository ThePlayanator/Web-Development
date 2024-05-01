function remove() {
 var request = db.transaction(["employee"], "readwrite")
 .objectStore("employee")
 .delete("02");
 
 request.onsuccess = function(event) {
 alert("prasad entry has been removed from your database.");
 };
}