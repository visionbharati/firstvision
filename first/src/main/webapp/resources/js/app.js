var visionBharati = angular.module('visionBharati',['ngRoute','ngCookies', 'ngTouch', 
                                                    'ngAnimate','ui.bootstrap','pageslide-directive']);
visionBharati.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl : "home.html",
	})
	.when("/home",{
		templateUrl : "home.html",
	})
	.when("/aboutus",{
		templateUrl : "aboutus.html",
	})
   .when("/wecare",{
		templateUrl : "domains/wecare/home.html",
	})
	.when("/helptalent",{
		templateUrl : "domains/helptalent/home.html",
	}) 
	.when("/nriservices",{
		templateUrl : "domains/nriservices/home.html",
	})
	.when("/exploreindia",{
		templateUrl : "domains/exploreindia/home.html",
	})
	.when("/technicalresearch",{
		templateUrl : "domains/technicalresearch/home.html",
	})
	.when("/contactus",{
		templateUrl : "contactus.html",
	})
	.otherwise({
		templateUrl : "error.html",
	})

}]);

visionBharati.run(['$rootScope', '$http', '$browser', '$timeout', "$route", 
                   function ($scope, $http, $browser, $timeout, $route) {

	$scope.$on("$routeChangeSuccess", function (scope, next, current) {

		$scope.part = $route.current.activetab;

	});
	
}]);

visionBharati.controller('homeCtrl',['$scope', function($scope){
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.slides = [
	                 {
	                	 image: 'resources/images/wecare_home.jpg',
	                	 name: 'We Care',
	                	 text: 'care with love',
	                	 url: 'wecare'
	                 },
	                 {
	                	 image: 'resources/images/helptalent_home.jpg',
	                	 name: 'Help Talent',
	                	 text: 'get what you deserve', 
	                	 url: 'helptalent'
	                 },

	                 {
	                	 image: 'resources/images/nriservices_home.jpg',
	                	 name: 'NRI Services',
	                	 text: 'always for you',
	                	 url: 'nriservices'
	                 },

	                 {
	                	 image: 'resources/images/exploreindia_home.jpg',
	                	 name: 'Explore India',
	                	 text: 'a real beauty journey',
	                	 url: 'exploreindia'
	                 },
	                 {
	                	 image: 'resources/images/technicalresearch_home.jpg',
	                	 name: 'Technical Research',
	                	 text: 'deep search',
	                	 url: 'technicalresearch'
	                 }
	                 ];
	
}]);

/*Slide Menu controller*/
visionBharati.controller('pageslideCtrl', [ '$scope', function($scope) {
	$scope.checked = false; // This will be binded using the ps-open attribute
	$scope.toggle = function() {
		$scope.checked = !$scope.checked
	}
} ]);

/*navbar controller*/
visionBharati.controller('navCtrl', function($scope, $location) {   
    $scope.isActive = function(route) {
        return route === $location.path();
    };
});

visionBharati.directive('scroll', function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 250) {
                scope.boolChangeClass = true;
                console.log('Scrolled below header.');
            } else {
                scope.boolChangeClass = false;
                console.log('Header is in view.');
            }
           scope.$apply();
       });
    };
});

//$(document).ready(function(){       
//	   var scroll_start = 0;
//	   var startchange = $('#startchange');
//	   var offset = startchange.offset();
//	    if (startchange.length){
//	   $(document).scroll(function() { 
//	      scroll_start = $(this).scrollTop();
//	      if(scroll_start > offset.top) {
//	          $(".navbar-default").css('background-color', '#f0f0f0');
//	       } else {
//	          $('.navbar-default').css('background-color', 'transparent');
//	       }
//	   });
//	    }
//	});
//$(window).scroll(function() {
//    if ($(".navbar").offset().top > 50) {
//        $('#custom-nav').addClass('affix');
//        $(".navbar-fixed-top").addClass("top-nav-collapse");
//    } else {
//        $('#custom-nav').removeClass('affix');
//        $(".navbar-fixed-top").removeClass("top-nav-collapse");
//    }   
//});