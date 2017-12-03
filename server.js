const express = require('express');
const path = require('path');
const http = require('http');

const socketIO = require('socket.io');

const app = express();

const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname,'dist')));

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'dist/index.html'));
});

const server = http.createServer(app);

const io = socketIO(server);

io.on('connection',(socket)=>{
    console.log("new connected");

    socket.on('disconnect',()=>{
        console.log("disconnected");
    });
});

server.listen(port,()=>{
    console.log(`server runs ${port}`);
});