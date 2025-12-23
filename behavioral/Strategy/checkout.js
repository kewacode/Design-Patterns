class Checkout {
	constructor() {
		this.strategy = null
	}

	setStrategy(strategy) {
		this.strategy = strategy
	}

	process(amount) {
		if (!this.strategy) {
			throw new Error('Estratégia não informada.')
		}

		console.log('Iniciando pagamento')
		this.strategy.pay(amount)
		console.log('Finalizando pagamento')
	}
}

module.exports = Checkout