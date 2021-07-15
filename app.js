const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3000;

app.use(express.static('public'));

let message = []; //過去のメッセージを保存しておく配列

io.on('connection',function(socket){
    socket.on('message',function(msg){
        //　参加時に過去のメッセージを返す
        const id = socket.id;
        io.to(id).emit('signin', message);
        });

        socket.on('message',function(msg){
            message.push(msg); //メッセージを配列に追加
            message=message.slice(-100); // 最新の100件だけ保存
            io.emit('message', msg);
        });
 
    });

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});

