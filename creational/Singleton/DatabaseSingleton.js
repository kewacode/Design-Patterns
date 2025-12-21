class DatabaseSingleton {
	static #instance = null

	constructor() {
		if (DatabaseSingleton.#instance) {
			throw new Error('Utilize o getInstance para obter a conexão')
		}

		this.id = Math.random()
		console.log('Conexão única criada')
	}

	static getInstance() {
		if (!DatabaseSingleton.#instance) {
			DatabaseSingleton.#instance = new DatabaseSingleton()
		}

		return DatabaseSingleton.#instance
	}
}

module.exports = DatabaseSingleton