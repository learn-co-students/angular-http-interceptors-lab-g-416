function MyInterceptor() {

  this.responseError = function (config) {
    alert('An error has occurred: '+config)
  };
}
 
angular
    .module('app')
    .service('MyInterceptor', MyInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('MyInterceptor');
    });