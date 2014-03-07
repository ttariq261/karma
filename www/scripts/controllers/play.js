'use strict';

angular.module('conanWebApp')
  .controller('PlayController', function ($scope, $ionicModal) {

  	$ionicModal.fromTemplateUrl('views/new.html', function(modal){
  		$scope.newQ = modal;
  	}, {
  		scope: $scope,
  		animation:'slide-in-up'
  	});
  	
  	$scope.openNewQ = function(){
  		$scope.newQ.show();
  	};

   	$scope.closeModal = function(){
  		$scope.newQ.hide();
  	};
  	$scope.tickChoice = function(){
  		var element = document.getElementById('tick');
  		element.style.display = 'block';
  	}

  });
