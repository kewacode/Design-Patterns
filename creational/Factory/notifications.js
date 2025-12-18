class EmailNotification {
    send(recipient, message) {
        console.log(`\nENVIANDO E-MAIL para ${recipient}: "${message}`)
    }
}

class SMSNotification {
    send(recipient, message) {
        console.log(`\nENVIANDO SMS para ${recipient}: "${message}`)
    }
}

class PushNotification {
    send(recipient, message) {
        console.log(`\nENVIANDO via PUSH para ${recipient}: "${message}`)
    }
}

class TelegramNotification {
    send(recipient, message) {
        console.log(`\nENVIANDO via Telegram para ${recipient}: "${message}`)
    }
}

module.exports = {
    EmailNotification,
    SMSNotification,
    PushNotification,
    TelegramNotification
};