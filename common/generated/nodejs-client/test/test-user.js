var loopbackDomain = 'http://localhost:3000/api';

console.log('loopbackDomain: ' + loopbackDomain);

var User = require('./../user.js').user;
var user = new User(loopbackDomain);

user.login({
  credentials: {
    username:'happy',
    password: 'path'
  }
})
  .then(function(data){
    console.log('SUCCESS');
    console.log(data);
  },
  function(error){
    console.log('FAILURE');
    if (error.body) {
      console.error(error.body);
    }
    else {
      console.error(error);
    }
  });

