'use strict';

require('dotenv').config();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const WebSocket = require('ws');
const { Webhook } = require('discord-webhook-node');
const ws = new WebSocket('wss://spooky.ncore.pro:3001/spooky');
const hook = new Webhook(process.env.DISCORD_WEBHOOK);

ws.on('open', function () {
    hook.send('Tökvadászat indul !');
});

ws.on('close', function close() {
    hook.send('Websocket ledobott! Újraindítás szükséges!');
  });

ws.on('message', function (m) {
    hook.send("Tök!");
});
