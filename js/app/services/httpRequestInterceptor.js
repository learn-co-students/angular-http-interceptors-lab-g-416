function HttpRequestInterceptor() {
    this.responseError = config => {
        alert('No dice.')
    }
}
 
angular
    .module('app')
    .service('HttpRequestInterceptor', HttpRequestInterceptor)
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('HttpRequestInterceptor');
    });