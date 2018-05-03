function NotificationService() {
	this.showError = function (error) {
		return error;
	};
}

angular
	.module('app')
	.service('NotificationService', NotificationService);
