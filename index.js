const http = require('http');

const { deleteTable, createTable, insertUser, updateUser, findUserById } = require('./models/users');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello');
});

//deleteTable();
//createTable("user_test");
/*
insertUser({
    name: "Gaëlle",
    address: "Rue de la ruelle"
});
 */
/*
updateUser(1, {
    name:"Maxime Update",
    address: "Rue de la rue Update"
}, "user_test");
 */
/*
findUserById("user_test", 3);
*/

server.listen(3000);

