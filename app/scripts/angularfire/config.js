angular.module('firebase.config', [])
  .constant('FBURL', 'https://voting-app.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','twitter'])

  .constant('loginRedirectPath', '/login');
