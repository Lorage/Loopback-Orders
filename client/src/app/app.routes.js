(function(){

angular.module('orderclient')
	.config(routes);

	function routes($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/login");

		$stateProvider
			.state('login', {
				url: "/login",
				views: {
					'': {
						templateUrl: "./app/components/login/loginTemplate.html",
						controller: "loginController",
						controllerAs: "vm"
					}
				}

			})
			.state('order', {
				url: "/order",
				views: {
					'': {
						templateUrl: "./app/components/order/orderTemplate.html",
						controller: "orderController",
						controllerAs: "vm"
					}
				}
			});

	}

})();
