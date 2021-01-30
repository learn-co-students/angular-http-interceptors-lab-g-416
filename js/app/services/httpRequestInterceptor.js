function errorInterceptor(){
    this.responseError = function (config) {
        alert(`Error code: ${config.status}`)
        console.log(config.status)
        // NotificationService
        //     .showError(config.status);
    };


}

angular
.module ('app')
.service('errorInterceptor', errorInterceptor)
.config(function($httpProvider){
    $httpProvider.interceptors.push('errorInterceptor');
})