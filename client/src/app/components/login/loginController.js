(function(){

	angular.module('orderclient')
	.controller('loginController', ['$state', 'userService', loginController]);

	function loginController($state, userService){
		var vm = this;
		vm.userModel = {};

		vm.loginSubmit = function(){

			userService.login(vm.userModel).then(
				function success(response) {
        sessionStorage.setItem('apiKey', response.data.id);
				$state.go('order');
      }, function error(response) {
        throw new Error('Login failed.');
      });

		}

	}

})();
