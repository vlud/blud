'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'ui.bootstrap'
    ];

    var url = 'http://nsoft.ba/test-news?callback=JSON_CALLBACK';
    $scope.currentPage = 1;
    $scope.maxPosts = 5;

    $http.jsonp(url)
       .then(function(res){

          $scope.posts = res.data;  
          var totalItems = $scope.posts.length;
          $scope.postsSplitted = [];
          var tmpPosts = [];

          for(var i = 0; i< totalItems; i++){
            if( i%$scope.maxPosts != $scope.maxPosts - 1 ){
              tmpPosts.push($scope.posts[i]);
            } else {
              $scope.postsSplitted.push(tmpPosts);
              tmpPosts = [];
            }
          }

          if(tmpPosts.length > 0){
            $scope.postsSplitted.push(tmpPosts);
          }

          $scope.maxPaging = $scope.postsSplitted.length -1;

          $scope.currentPosts = $scope.postsSplitted[$scope.currentPage -1 ];

          $scope.pages = [];

          for(var i=1; i< $scope.postsSplitted.length; i++){
            $scope.pages.push(i);
          }
          

          /*$scope.groupedDetails = [];
          var used = [];
          for(var i in $scope.phones){
            for(var j in $scope.phones[i]){
              if( j === 'image' || j === 'name' || j === 'id' ){
                continue;
              }

              
              var idx = used.indexOf(j);
              if( idx === -1 ){


                /*$scope.groupedDetails[j] = {};  
                $scope.groupedDetails[j].items = [];
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
          }     */         
        });

	  $scope.setPage = function (pageNo) {

      console.log(pageNo);
	    $scope.currentPage = pageNo;
      $scope.currentPosts = $scope.postsSplitted[pageNo -1 ];
      console.log($scope.currentPosts)
	  };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	  };

  });
