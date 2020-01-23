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
     * @param { String } name - User Name
     * @param { String } address - User Address
     * @return { Object }
     */
    insertUser: user => {
        const sql = "INSERT INTO user_test SET ?";
        connection.query(sql, user, (error, result) => {
            if(error) throw error;
            console.log({insertUser : result});
        });
    }
}