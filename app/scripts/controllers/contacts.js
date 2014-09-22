'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('ContactsCtrl', function ($scope, $http) {

    $scope.formParams={
    	full_name : "", 
    	email     : "", 
    	subject   : "",
    	message   : "", 
    	to        : "coric.vladimir@nsoft.ba"
    };

    $scope.error={
    	full_name : false, 
    	email     : false, 
    	subject   : false,
    	message   : false, 
    	to        : false
    };

    $scope.userMessage = '';
    $scope.userMessageSuccess = false;

    $scope.formProcess = function(){
    	console.log('formProcess');
    	//console.log($scope.formParams);

    	$scope.error = {
	    	full_name : false, 
	    	email     : false, 
	    	subject   : false,
	    	message   : false, 
	    	to        : false
	    };

	    var success = true;

    	for(var i in $scope.formParams){
    		$scope.error[i] = ($scope.formParams[i] == "");
    		if(success && $scope.error[i]){
    			success = false;
    		}
    	}


    	if(success){

		    var url = 'http://nsoft.ba/mailgun?' + serialize($scope.formParams) + '&callback=JSON_CALLBACK';

		    $http.jsonp(url)
       			.then(function(res){
       				//console.log(res);
       				$scope.userMessage = res.data.message;
       				$scope.userMessageSuccess = res.status === 200;
       				if(res.status === 200){
       					$scope.formParams={
					    	full_name : "", 
					    	email     : "", 
					    	subject   : "",
					    	message   : "", 
					    	to        : "coric.vladimir@nsoft.ba"
					    };
       					setTimeout( function(){
       						$scope.userMessage = '';
       					}, 4000)
       				}
       			});
    	} else {
    		$scope.userMessage = 'Please enter all fields';
    		$scope.userMessageSuccess = false;
    	}
    }

    var serialize = function(obj, prefix) {
      var str = [];
      for(var p in obj) {
        var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
        str.push(typeof v == "object" ?
          serialize(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
      return str.join("&");
    }
  });
