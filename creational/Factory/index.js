const NotificationFactory = require("./NotificationFactory")


const destinatario = "cliente@exemplo.com"
const mensagem = "Seu pedido #987123 foi processado e está a caminho! Obrigado pela confiança."

const notifEmail = NotificationFactory.create('email')
notifEmail.send(destinatario, mensagem)

const notifTelegram = NotificationFactory.create('telegram')
notifTelegram.send(destinatario, mensagem)

// function createNotification(type) {
//     switch (type.toLowerCase()) {
//         case 'email':
//             return new EmailNotification()
//         case 'sms':
//             return new SMSNotification()
//         case 'push':
//             return new PushNotification()
//         default:
//             throw new Error(`Tipo de notificação não suportado: ${type}.`)
//     }
// }

// try {
//     const emailNotif = createNotification('email')
//     emailNotif.send(destinatario, mensagem)

// 	const smsNotif = createNotification('sms')
//     smsNotif.send(destinatario, mensagem)

//     const pushNotif = createNotification('push')
//     pushNotif.send(destinatario, mensagem)
// } catch (e) {
// 	console.log('Modelo de notificação não cadastrado.')
// }
