var Rooms = {

  add: function() {
    var newRoom = prompt('Add new room name');
    Rooms.rooms.push(newRoom);
    RoomsView.renderRoom(newRoom);
    RoomsView.select($('select').val(newRoom));
  },
  
  rooms:  []
};