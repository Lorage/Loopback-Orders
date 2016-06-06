
(function(){
  angular
      .module('orderclient')
      .factory('orderService', ['$http', 'config', 'userService',orderService]);

  function orderService($http, config, userService) {
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    function submitOrder(orderData){
      var apiKey = sessionStorage.getItem('accessKey');
      console.log(orderService);
      orderData.businessId = userService.userDetails.businessId;
      orderData.customerId = userService.userDetails.id;
      orderData.date = Date.parse(orderData.date);


      console.log(orderData);

      //Uses the .value created in the module declaration for the API root
      var request = $http({
        method: 'POST',
        url: config.apiRoot + 'Orders?access_token=' + apiKey,
        data: orderData,
        headers: headers,
      });

      return request;
    }


    return {
      submitOrder: submitOrder
   };
  }

})();
