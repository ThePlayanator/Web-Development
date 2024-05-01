function add() {
 var request = db.transaction(["employee"], "readwrite")
 .objectStore("employee")
 .add({ id: "01", name: "prasad", age: 24, email: "prasad@tutorialspoint.com"
});
 
 request.onsuccess = function(event) {
 alert("Prasad has been added to your database.");
 };
 
 request.onerror = function(event) {
 alert("Unable to add data\r\nPrasad is already exist in your database! ");
 }
}
