'use strict';

require('dotenv').config();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const WebSocket = require('ws');
const { Webhook ,MessageBuilder} = require('discord-webhook-node');
const ws = new WebSocket('wss://spooky.ncore.pro:3001/spooky');
const hook = new Webhook(process.env.DISCORD_WEBHOOK);

ws.on('open', function () {
    const embed = new MessageBuilder()
    .setTitle('Spooky Dayz Announcer is running!')
    .setAuthor('Ncore Spooky Dayz Announcer')
    .setColor('14177041')
    .setImage('https://i.kek.sh/emm6XNi6TfP.png')
    .setFooter('Ncore Spooky Dayz Announcer')
    .setTimestamp();

    hook.send(embed)
    
});

ws.on('close', function close() {
    const embed = new MessageBuilder()
    .setTitle('Websocket dropped connection! Restart the application!')
    .setAuthor('Ncore Spooky Dayz Announcer')
    .setColor('14177041')
    .setImage('https://i.kek.sh/emm6XNi6TfP.png')
    .setFooter('Ncore Spooky Dayz Announcer')
    .setTimestamp();
    
    hook.send(embed)
  });

ws.on('message', function (m) {
    const embed = new MessageBuilder()
            .setTitle('A spooky creature has appeared!')
            .setAuthor('Ncore Spooky Dayz Announcer')
            .setColor('14177041')
            .setImage('https://nc-img.cdn.l7cache.com/spooky2k21/sp2021-' + (Math.floor(Math.random() * 28) + 1) + '.png')
            .setDescription('Capture it on ncore! If it doesnt appear for you, refresh the webpage and wait for the next encounter.')
            .setFooter('Ncore Spooky Dayz Announcer')
            .setTimestamp();
            
            hook.send(embed)
});
