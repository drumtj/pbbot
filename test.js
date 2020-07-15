// https://github.com/yagop/node-telegram-bot-api/blob/release/doc/api.md
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1321560344:AAHZsaYBlkAU5a2ok1gsJ7RBEB8L5opSTVY';
const regKeyword = "김태진천재";
const regMessage = '뭘 좀 아는군요..\n지금부터 돈 버는 배팅타이밍을 찾으면 알려드릴게요.';
const exitKeyword = "종료";
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

let users = {};

function addUser(id, name){
  users[id] = name;
  bot.sendMessage(id, regMessage);
}

function exitListen(id){
  if(users[id]){
    delete users[id];
    bot.sendMessage(id, "알림종료됨.");
  }
}

function send(str){
  Object.keys(users).forEach(id=>{
    bot.sendMessage(id, str);
  })
}
// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//
//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"
//
//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if(msg.text == regKeyword){
    addUser(chatId, msg.from.last_name + ' ' + msg.from.first_name);
  }else if(msg.text == exitKeyword){
    exitListen(chatId);
  }
});

let i=0;
setInterval(()=>{
  send("test" + i++);
}, 5000)
