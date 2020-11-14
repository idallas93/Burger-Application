// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "pitynlqgnw3lo9r7",
  password: "bj0vy2scswmepaka",
  database: "qwdowfpmncj692zm"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
