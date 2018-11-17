var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
     console.log(Messages)
   for (var i = 0; i < Messages.results.length; i++){
      var message = {
      username: Messages.results[i].username,
      text: Messages.results[i].text,
      roomname: Messages.results[i].roomname
      };
    MessagesView.renderMessage(message);
    }
  },
  
  
  render: function() {
    
  },

  renderMessage: function(message) {
    var html = "" + MessageView.render(message);
    console.log(html);
    $("#chats").prepend(html);
  }
};