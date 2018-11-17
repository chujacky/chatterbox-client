var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
  
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      MessagesView.initialize();
      RoomsView.initialize();  
      App.stopSpinner();
    });

    
    
    $("select").on("change", function() {
      RoomsView.select($('select').val());
    });

    $("button").on("click", Rooms.add);
    ;
 

     
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
