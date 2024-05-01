// Dynamic values 

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) { 
 tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
 tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?'), [e_id, e_log];
});
