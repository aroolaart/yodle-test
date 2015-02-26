'use strict';

var app = angular.module('ratingsApp', []);

// Controllers

app.controller("RatingCtrl", function($scope, $http) {
  
  $scope.reviews = [];

  $scope.reviews = {
    "reviews": [
        {
          "date": "November 12, 2014",
          "rating": "5",
          "summary": "Best Restaurant Ever",
          "description": "Food is amazing. Staff is very friendly"
        },
        {
          "date": "October 16, 2014",
          "rating": "3",
          "summary": "Pretty good food",
          "description": "Nice atmosphere. I loved the service best of all, the food was DELICIOUS!"
        },
        {
          "date": "September 30, 2014",
          "rating": "2",
          "summary": "Best Restaurant Ever",
          "description": "Turrible, just Turrible!"
        },
        {
          "date": "November 12, 2014",
          "rating": "3",
          "summary": "It is alright",
          "description": "Food is decent"
        },
        {
          "date": "November 12, 2014",
          "rating": "5",
          "summary": "Wonderful Restaurant",
          "description": "The lobster is the best I have ever had."
        },
        {
          "date": "November 12, 2014",
          "rating": "4",
          "summary": "Best Restaurant Ever",
          "description": "Food is amazing. Staff is very friendly"
        }
    ]
	};
	$scope.starTotals = [];
	$scope.allStarTotal = 0;

	$scope.getAverage = function (myreviews) {
		for(var y=0;y < 5 ;y++) {
			$scope.starTotals[y] = 0;
		}			var sum = 0;
		for(var i=0;i < myreviews.length ;i++) {
			sum = sum + parseInt(myreviews[i].rating);
			$scope.starTotals[parseInt(myreviews[i].rating) - 1]++;
			$scope.allStarTotal = $scope.allStarTotal + parseInt(myreviews[i].rating);
		}
		return Math.round( sum/myreviews.length * 10 ) / 10;
	}

});



