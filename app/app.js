angular.module('calendarDemoApp', [])
	// .factory('updateCalendarRange', function($rootScope) {
	// 	return function() {
	// 		var newDate = new Date();
	// 		newDate.setFullYear($rootScope.year);
	// 		newDate.setMonth($rootScope.month);
			
	// 		return CalendarRange.getMonthlyRange(newDate);
	// 	};
	// })
	.controller('AppCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		var today = new Date();
		$scope.currentYear = today.getFullYear();
		$scope.currentMonth = today.getMonth();

		$scope.months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		$scope.years = [];
		var min = $scope.currentYear - 20;
		var max = $scope.currentYear + 20;
		for(var x = min; x < max; x++) {
			$scope.years.push(x);
		}

		$scope.calendarRange = CalendarRange.getMonthlyRange(today);

		$scope.updateCalendar = function(){
			
			var newDate = new Date();
			newDate.setFullYear(parseInt($scope.currentYear));
			newDate.setMonth(parseInt($scope.currentMonth));
			console.log(newDate);
			$scope.calendarRange = CalendarRange.getMonthlyRange(newDate);
		};

	}])
	
	.directive('navigation', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/nav.html',
			controller: 'AppCtrl'
		};
	})
	.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'views/calendar.html',
			controller: 'AppCtrl',
			link: function() {
			}
		};
	});

// your controller and directive code go here