function Interceptor(NotificationService) {
    this.responseError = function () {
        alert("Erroooor!");
    };
}

angular
    .module('app')
    .service('Interceptor', Interceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('Interceptor');
    });
