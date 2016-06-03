
(function(){
  angular
      .module('orderclient')
      .factory('userService', ['$http', 'config', userService]);

  function userService($http, config) {
    var userCred = null;
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    function setUserData(){

    }

    function setUserCred(){

    }


    function login(credentials){

      //Uses the .value created in the module declaration for the API root
      var request = $http({
        method: 'POST',
        url: config.apiRoot + '/Customers/login',
        data: credentials,
        headers: headers,
      });

      return request;
    }


    return {
      login: login
   };
  }

})();
