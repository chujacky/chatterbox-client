var Friends = {

  toggleStatus: function() {
    for (var i = 0; i < $('.username').length; i ++) {
      if ($('.username')[i].innerHTML === event.target.innerHTML) {
        $('.username')[i].classList.add('friend');
      }
    }
  }
};