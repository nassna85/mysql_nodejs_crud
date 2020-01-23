const http = require('http');

const { deleteTable, createTable, insertUser } = require('./models/users');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello');
});

//deleteTable();
//createTable("user_test");
insertUser({
    name: "Maxime",
    //address: "Rue de la rue"
});

server.listen(3000);

