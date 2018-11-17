var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  
  },
  
  renderRoom: function(roomName){
    this.$select.append(`<option value=${roomName}>${roomName}</option>`)
  }

};
