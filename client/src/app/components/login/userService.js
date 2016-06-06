
(function(){
  angular
      .module('orderclient')
      .factory('userService', ['$http', 'config', userService]);

  function userService($http, config) {
    var accessToken = null;
    var userDetails = {};
    var headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    function setToken (token) {
      accessToken = token;
    };

    function setUserDetails (details){
      userDetails = details;
    }

    function getUserDetails (){
      //Uses the .value created in the module declaration for the API root
      var request = $http({
        method: 'GET',
        url: config.apiRoot + '/Customers/1/?access_token=' + accessToken,
        headers: headers,
      });

      return request;
    }

    function logout(){
      //Uses the .value created in the module declaration for the API root
      var request = $http({
        method: 'POST',
        url: config.apiRoot + '/Customers/logout?access_token=' + accessToken
      });
      return request;
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
      login: login,
      logout: logout,
      setToken: setToken,
      getUserDetails: getUserDetails,
      setUserDetails: setUserDetails,
      userDetails: userDetails
   };
  }

})();
