'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:PhonesCtrl
 * @description
 * # PhonesCtrl
 * Controller of the testAppApp
 */



angular.module('testAppApp')
  .controller('PhonesCtrl', function ($scope, $http, $filter	) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',  
      'AngularJS',
      'Karma'
    ];

    var url = 'http://nsoft.ba/angular?callback=JSON_CALLBACK';

    $scope.query = {};

    $http.jsonp(url)
       .then(function(res){
          $scope.phones = res.data.phones;  

          $scope.groupedDetails = [];
          var used = [];
          for(var i in $scope.phones){
            for(var j in $scope.phones[i]){
              if( j === 'image' || j === 'name' || j === 'id' ){
                continue;
              }

              
              var idx = used.indexOf(j);
              if( idx === -1 ){


                /*$scope.groupedDetails[j] = {};  
                $scope.groupedDetails[j].items = [];*/
                $scope.groupedDetails.push({
                  type : j,
                  items:[]
                });
                used.push(j);
                idx = used.indexOf(j);
              }

              if($scope.groupedDetails[idx].items.indexOf($scope.phones[i][j]) === -1 ){
                $scope.groupedDetails[idx].items.push($scope.phones[i][j]);
              }
            }
          }              
        });

    $scope.selectedPhoneId = 0;
    $scope.selectedPhone = {};
    $scope.selectedPhoneDetails = {};

    $scope.setPhone = function(phoneId){
        $scope.selectedPhoneId = phoneId;
        $scope.selectedPhone = getPhone(phoneId);

        for(var i in $scope.selectedPhone){
          if(i !== 'image' && i !== 'name'){
            $scope.selectedPhoneDetails[i] = $scope.selectedPhone[i];
          }
        }

        console.log(JSON.stringify($scope.groupedDetails));
    };

    $scope.clearPhone = function(){
        $scope.selectedPhoneId = 0;
        $scope.selectedPhone = {};
        $scope.selectedPhoneDetails = {};
    };

    $scope.filterItems = function(g) {

        var ret = $filter('filter')(g.items, $scope.query);
        g.filteredItemCount = ret.length;
        return ret;
    };

    function getPhone(id){
      //var phone = {};
      for(var i=0; i< $scope.phones.length; i++){
        if($scope.phones[i].id === id){
          return $scope.phones[i];
        }
      }

      return {};
    }


  	//$scope.phones = phones.phones;
  });
