var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
  
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(MessagesView.initialize);
    App.stopSpinner();
    $("button").on("click", Rooms.add);
    $(".username").on("click", Friends.toggleStatus);
 

     
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages = data;
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
