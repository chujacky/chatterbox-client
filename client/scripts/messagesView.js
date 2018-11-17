var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  
  
  render: function() {
    
  },

  renderMessage: function(message) {
    $("#chats").prepend(MessageView.render());
  }
};