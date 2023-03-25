'use strict';

const express = require('express')
const app = express()
const fs = require('fs');
var cors = require('cors')
const bodyParser = require('body-parser');

//   "avatar": 'https://media-direct.cdn.viber.com/download_photo?dlid=6oMezeLnJwIbG8dORlYx9yVd5j6jntJY25CvJb59O0QWYixgM8dv58L8LSFL4Fqm8MjA2S1I-HiTSAmGlvpCJ9gXuBu6WEr2K_DsVPNgjAH7u_Hf2M8vM_bfoH-0Mgb1qqT4hQ&fltp=jpg&imsz=0000',

const ViberBot = require('viber-bot').Bot;
// const ViberBot = require('viber-bot').;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const ContactMessage = require('viber-bot').Message.Contact;
const KeyboardMessage = require('viber-bot').Message.Keyboard;



app.use(bodyParser.urlencoded({extended: true, limit: '100mb'}));
// app.use(bodyParser.json({limit: '100mb'}));
// app.use(express.urlencoded({ extended: true }));
// console.log('express.json');
// console.log(express.json());
// app.use(express.json());
app.use(cors())

const bot = new ViberBot({
	authToken: '4ec71b1b0227e7e2-7ef04081ce678807-f153528056fa82f1',
	name: "Yurick_Bot",
    avatar: 'https://developers.viber.com/docs/img/stickers/40122.png'
});

const ngrok = require('./server_url.js');

function say(response, message) {
    response.send(new TextMessage(message));
}

function sayToAll(user, message) {
    bot.sendMessage(user, new TextMessage(message))
    .catch(err=> console.log(err))
}

function helloKeyboard(response) {
     const SAMPLE_KEYBOARD = {
        "Type": "keyboard",
        "Revision": 1,
        "Buttons": [{
			"Columns": 6,
			"Rows": 1,
			"BgColor": "#2db9b9",
			"ActionType": "reply",
			"ActionBody": "Подписаться",
			"Text": "Подписаться",
			"TextVAlign": "middle",
			"TextHAlign": "center",
			"TextOpacity": 60,
			"TextSize": "regular"
		}]
    };
    
    response.send(new KeyboardMessage(SAMPLE_KEYBOARD))
}



function getAllUsers() {
    let users =

        fs.readFileSync('./user.json',(err)=>{
            if(err){
                console.log(err);
            }
        })

    return JSON.parse(users)
}


// The user will get those messages on first registration
bot.onSubscribe(response => {
    // say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
    helloKeyboard(response)
    console.log('==============================')
    console.log('НА ПОДПИСКУ');
    console.log(response.userProfile);
    console.log('==============================')
    // return say(response,  'Обратитесь к администратору для подписки на заявки')
});

bot.onTextMessage(/^hi|hello|Старт$/i, (message, response) => {
    console.log('sdasdasdasdasdasdasdasdasdas=========')
    console.log(message);
    return say(response,  'ПроверОЧКА')
} )

bot.onTextMessage(/^Подписаться$/i, (message, response) => {
    console.log('==============================')
    console.log('НА ПОДПИСКУ');
    console.log(response.userProfile);
    console.log('==============================')
    return say(response,  'Ожидайте подписки от админа');
} )








app.get('/', (req, res) => {
    // bot.sendMessage(Julia, new TextMessage("Привет бусичка"));

    const users = getAllUsers();
    console.log(users)

    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        bot.sendMessage(users[i], new TextMessage("Привет бусичка:  " + i))
    }
    res.send('Hello World!')
  })




  app.get('/call', (req, res) => {
    
    // console.log(req);
    // console.log(req.body);
    // console.log(req.params);
    const number = req.query.number;
    console.log(number);
    const users = getAllUsers();
    console.log(users)

    for (let i = 0; i < users.length; i++) {
        sayToAll(users[i],`Человек просит позвонить:\n${number}`)
    }
    res.json({status: true})
  })



  app.get('/go', (req, res) => {

    const data = req.query;
    // console.log(data);
    // console.log(JSON.parse(data.from));
    const from = JSON.parse(data.from)
    const to = JSON.parse(data.to)

    const msg = `
Человек хочет забронировать поездку!\n\nИнформация по поездке:\nОт куда: ${from.country ? `Страна - ${from.country}, `: ''}Город(Местоположение) - ${from.title}\n\nКуда: ${to.country ? `Страна - ${to.country}, `: ''} Город(Местоположение) - ${to.title}\n\nДата: ${data.date}\n
Имя: ${data.name}\nТелефон: ${data.telephone}
    `;

    const users = getAllUsers();
    console.log(users)

    for (let i = 0; i < users.length; i++) {
        sayToAll(users[i], msg)
    }
    res.json({status: true})
  })










app.use(bot.middleware());



//server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  return ngrok.getPublicUrl().then(publicUrl => {
    console.log('publicUrl => ', publicUrl);
      bot.setWebhook(publicUrl);
  }).catch(error => {
            console.log('Can not connect to ngrok server. Is it running?');
            console.error(error);
            process.exit(1);
        });
})

// if (process.env.NOW_URL || process.env.HEROKU_URL) {
//     const http = require('http');
//     const port = process.env.PORT || 5000;

//     http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL));
// } else {
//     return ngrok.getPublicUrl().then(publicUrl => {
//         const http = require('http');
//         const port = process.env.PORT || 5000;

//         console.log('publicUrl => ', publicUrl);
       
//         http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

//     }).catch(error => {
//         console.log('Can not connect to ngrok server. Is it running?');
//         console.error(error);
//         process.exit(1);
//     });
// }
