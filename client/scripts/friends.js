var Friends = {

  toggleStatus: function() {
    Friends.myFriends.push(this.username);
    console.log(this);
  },
  
  myFriends: []

};