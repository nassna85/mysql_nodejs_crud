const { connection } = require('./connection');

module.exports = {

    /**
     * @return { Object }
     */
    deleteTable: () => {
        const sql = "DROP TABLE user_test";
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log({deleteTable : result});
        });
    },

    /**
     * @param { String } tableName - Table Name
     * @return { Object }
     */
    createTable: tableName => {
        const sql = `CREATE TABLE ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log({createTable : result});
        });
    },

    /**
     * @param { Object } user - User Object
     * @return { Object }
     */
    insertUser: user => {
        const sql = "INSERT INTO user_test SET ?";
        connection.query(sql, user, (error, result) => {
            if(error) throw error;
            console.log({insertUser : result});
        });
    },

    /**
     * @param {number} id - User Id
     * @param {Object} user - User Object
     * @param {String} tableName - Table Name
     * @return {Object}
     */
    updateUser: (id, user, tableName) => {
        const sql = `UPDATE ${tableName} SET ? WHERE id = ${id}`;
        connection.query(sql, user, (error, result) => {
            if(error) throw error;
            console.log({updateUser: result});
        });
    },

    /**
     * @param {String} tableName - Table Name
     * @param {number} id - User Id
     * @return {Object}
     */
    findUserById: (tableName, id) => {
        const sql = `SELECT * FROM ${tableName} WHERE id = ${id}`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log({findUserById:result});
        });
    },

    /**
     * @param {String} tableName - Table Name
     * @return {Object}
     */
    findAllUsers: tableName => {
        const sql = `SELECT * FROM ${tableName}`;
        connection.query(sql, (error, results) => {
            if(error) throw error;
            console.log({findAllUsers: results});
        });
    }
};