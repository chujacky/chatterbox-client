var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
    for (var i = Messages.results.length - 1; i >= 0; i--) { //newer data in the beginning
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
    $("#chats").prepend(html); //for reverse chronological
  }
};