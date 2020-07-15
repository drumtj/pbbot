import telegram

class TelegramBot:

    def __init__(self, token):
        self.token = token
        self.bot = telegram.Bot(token = self.token)

    def sendMessage(self, chat_id, message):
        self.bot.sendMessage(chat_id = chat_id, text=message)



if __name__ == "__main__":
    token = '1321560344:AAHZsaYBlkAU5a2ok1gsJ7RBEB8L5opSTVY'
    bot = TelegramBot(token)
    receiver_id = "42593793" # your id

    #for i in bot.bot.getUpdates():
    #    print(i.message)
    bot.sendMessage(receiver_id, "Hello")
    # print(bot.bot.getUpdates())
