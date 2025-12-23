class PixStratagy {
	pay(amount) {
		console.log(`Realizando pagamento com Pix, valor: ${amount}`)
	}
}

class CardStrategy {
	constructor(cardNumber) {
		this.cardNumber = cardNumber
	}

	pay(amount) {
		console.log(`Realizando pagamento com Cartão, valor: ${amount}, número do cartão ${this.cardNumber}`)	
	}
}

class PaypalStrategy {
	constructor(email) {
		this.email = email
	}

	pay(amount) {
		console.log(`Realizando pagamento com Cartão, valor: ${amount}, email: ${this.email}`)
	}
}

module.exports = {PixStratagy, CardStrategy, PaypalStrategy}