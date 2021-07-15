<script>
    const socketio = io();
    const form = document.getElementById("form");
    const input = document.getElementById("msg");
    const chats = document.getElementById("chats");

    const nameForm = document.getElementById("nameForm");
　　const userName = document.getElementById("userName");

let username='';
nameForm.addEventListener('submit', function(event){
  if(userName.value!==''){
    username = userName.value;
    nameForm.style.display ="none";
    form.style.display ="flex";

    socketio.emit('signin');

    const msg = {msg: username + ' さんが参加しました。', name: 'システム'};
    socketio.emit('message', msg);
  }

  event.preventDefault();
})

    form.addEventListener('submit', function(event){
     if(input.value!==''){
      const msg = {msg: input.value, name: username};
      socketio.emit('message', msg);
      input.value='';
     }
      event.preventDefault();
    })

    socketio.on('message',function(msg){
      const li = document
      li.append(msg.msg + '(' + msg.nameForm
      chats.append(li);
    });
    /</script>