const { EmailNotification, SMSNotification, PushNotification, TelegramNotification } = require('./notifications')

const registry = new Map()

registry.set('email', EmailNotification)
registry.set('sms', SMSNotification)
registry.set('push', PushNotification)
registry.set('telegram', TelegramNotification)

class NotificationFactory {
	static create(type) {
		const ClassContructor = registry.get(type)

		if (!ClassContructor) {
			throw new Error('Tipo de notificação não suportado')	
		}

		return new ClassContructor()
	}
}

module.exports = NotificationFactory