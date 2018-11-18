var MessageView = {

  render: _.template(`<div class="chat">
        <div class="username" onclick="Friends.toggleStatus()"><%- username %></div>
        <div><%- text %></div>
         <div><%- roomname %></div>
      </div>`)

};