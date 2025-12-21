const uniqueInstance = require("./Database")
const Database = require("./Database")
const DatabaseSingleton = require("./DatabaseSingleton")

// const conn1 = new Database()
// const conn2 = new Database()

// const conn1 = DatabaseSingleton.getInstance()
// const conn2 = DatabaseSingleton.getInstance()

const conn1 = uniqueInstance
const conn2 = uniqueInstance

console.log(conn1.conn)
console.log(conn2.conn)

console.log(conn1 === conn2)