const { WebSocketServer } = require("ws");
const dotenv = require('dotenv');

dotenv.config();

const wss = new WebSocketServer({port: process.env.PORT || 8080});

wss.on('connection', (clientConnected) => {

    clientConnected.on('error', console.error);

    clientConnected.send('Messagem enviada pelo servidor para um único user');

    clientConnected.on('message', (data) => {
    
        wss.clients.forEach((client) => client.send(data.toString()));
    })

    console.log('client connected');
})