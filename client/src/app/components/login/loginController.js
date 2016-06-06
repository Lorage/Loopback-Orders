(function(){

	angular.module('orderclient')
	.controller('loginController', ['$state', 'userService', loginController]);

	function loginController($state, userService){
		var vm = this;
		vm.userModel = {};

		vm.loginSubmit = function(){

			userService.login(vm.userModel).then(
				function success(response) {
					setDetails(response.data.id);

					userService.getUserDetails(response.data.id).then(function(response){
						console.log(response)
						userService.setUserDetails(response.data);
					});

					$state.go('order');
      }, function error(response) {
        throw new Error('Login failed.');
      });

		}

		function setDetails(id) {
			userService.setToken(id);
			sessionStorage.setItem('accessKey', id);
		}

	}

})();
