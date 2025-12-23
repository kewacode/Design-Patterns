const { CardStrategy, PaypalStrategy, PixStratagy } = require('./payments')
const Checkout = require('./checkout')

const checkout = new Checkout()
const pix = new PixStratagy()
const card = new CardStrategy('1111-1111')
checkout.setStrategy(card)

checkout.process(150)

// class PaymentProcessor {
// 	processPayment(method, amount, email) {
// 		if (method === 'credit-card') {
// 			console.log( `Realizando pagamento com cartão de crédito no valor de R$${amount}.`)
// 			// Lógica cartão
// 		} else if (method === 'paypal') {
// 			console.log( `Redirecionando para paypal valor de ${amount} reais.`)
// 			// Lógica paypal
// 		} else if (method === 'pix') {
// 			console.log( `Gerando QRcode pix de ${amount}.`)
// 			// Lógica do pix
// 		} else {
// 			throw new Error('Método inexistente')
// 		}
// 	}
// }

// const processor = new PaymentProcessor()
// processor.processPayment('pix', 100)