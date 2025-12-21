class Database {
	constructor() {
		this.conn = `Conexão ${Math.random()}.`
		console.log('Nova conexão aberta.')
	}
}

const uniqueInstance = new Database()

module.exports = uniqueInstance