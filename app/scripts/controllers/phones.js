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

    var url = 'http://nsoft.ba/angular?callback=JSON_CALLBACK';

    $scope.query = {};

    $scope.locale = {
      'manufacturer'      : 'Proizvođač',
      'ram'               : 'RAM',
      'internal_memory'   : 'Interna memorija',
      'cpu'               : 'Procesor',
      'back_camera'       : 'Kamera',
      'front_camera'      : 'Prednja kamera',
      'gpu'               : 'Graficka',
      'battery'           : 'Baterija',
      'battery_removable' : 'Sklonjiva baterija',
      'lte'               : 'lte',
      'price'             : 'Cijena'
    }

    $scope.filters = {
      'manufacturer'      : [],
      'ram'               : [],
      'internal_memory'   : [],
      'cpu'               : [],
      'back_camera'       : [],
      'front_camera'      : [],
      'gpu'               : [],
      'battery'           : [],
      'battery_removable' : [],
      'lte'               : [],
      'price'             : []
    }

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
                var hidden = used.length > 2;
                $scope.groupedDetails.push({
                  type : j,
                  items:[], 
                  usedValues : [],
                  hidden : hidden
                });
                used.push(j);
                idx = used.indexOf(j);
              }

              if($scope.groupedDetails[idx].usedValues.indexOf($scope.phones[i][j]) === -1 ){
                $scope.groupedDetails[idx].items.push({
                  value : $scope.phones[i][j], 
                  selected : false 
                });
                $scope.groupedDetails[idx].usedValues.push( $scope.phones[i][j] );
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
          if(i !== 'image' && i !== 'name' && i!='id'){
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

    $scope.applyToFilter = function( value, filter){
      if($scope.filters[filter].indexOf(value) === -1){
        $scope.filters[filter].push(value)
      } else {
        $scope.filters[filter].splice($scope.filters[filter].indexOf(value), 1)
      }
    }

    $scope.isHiddenFilter = function(filtr){
      for(var i in $scope.groupedDetails){
        if($scope.groupedDetails[i].type == filtr){
          return $scope.groupedDetails[i].hidden;
        }
      }
    }

    $scope.showHideFilter = function(type){
      for(var i in $scope.groupedDetails){
        if($scope.groupedDetails[i].type == type){
          $scope.groupedDetails[i].hidden = !$scope.groupedDetails[i].hidden;
          break;
        }
      }
    }

  	//$scope.phones = phones.phones;
  });


