(function(){

	angular.module('orderclient')
	.controller('orderController', ['$scope', '$state', '$window', 'userService', 'orderService', orderController]);

	function orderController($scope, $state, $window, userService, orderService){
		var vm = this;
		vm.orderModel = {};
		vm.blankModel = {};

		//Checks for existence of access key in sessionStorage and redirects if not logged in.
		(function checkState(){
      if (!sessionStorage.getItem('accessKey')) {
          $state.go('login');
      }
		})();

		$window.onbeforeunload = vm.onExit;

		vm.onExit = function (){
			userService.logout().then(function(data, status){
				alert(data);
				if(status == 200){
					storage.removeItem('accessKey');
				}
			});

		}

		vm.order = function(){

			orderService.submitOrder(vm.orderModel).then(
				function success(response) {
					vm.orderModel = vm.blankModel;
      }, function error(response) {
        throw new Error('Order submission failed.');
      });

		}

	}


})();
