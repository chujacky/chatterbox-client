var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (var i = 0; i < Messages.results.length; i++) {
      Rooms.rooms.push(Messages.results[i]['roomname']);
    }
    
    var uniqueRooms = _.uniq(Rooms.rooms);

    _.each(uniqueRooms, function(room) {
      RoomsView.renderRoom(room);
    });
  
  
  },

  select: function(roomname) {
    
    App.fetch(function() {
      $("#chats").empty();
      for (var i = 0; i < Messages.results.length; i++) {
        console.log(Messages.results[i].roomname === roomname);
        if (Messages.results[i].roomname === roomname) {
          var message = {
            username: Messages.results[i].username,
            text: Messages.results[i].text,
            roomname: Messages.results[i].roomname
          };
          MessagesView.renderMessage(message);
        }
      }
    });
  },
  
  renderRoom: function(roomName){
    this.$select.append(`<option value="${roomName}">${roomName}</option>`)
  }

};
