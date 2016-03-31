(function() {

	var portfolio = angular.module('portfolio', ['ui.router','ngSanitize']);

	portfolio.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
		$stateProvider.state('Home',{
			url:'/home',
			templateUrl:'views/home.html',
			controller:'homeCTRL',
			activeNav:'home'
		});

		$stateProvider.state('Websites',{
			url:'/websites',
			templateUrl:'views/websites.html',
			controller:'siteCTRL',
			activeNav:'websites'
		});

		$stateProvider.state('Designs',{
			url:'/designs',
			templateUrl:'views/designs.html',
			controller:'designCTRL',
			activeNav:'designs'
		});

		$stateProvider.state('Contact',{
			url:'/contact',
			templateUrl:'views/contact.html',
			controller:'contactCTRL',
			activeNav:'contact'
		});

		$stateProvider.state('Biography',{
			url:'/biography',
			templateUrl:'views/biography.html',
			controller:'bioCTRL',
			activeNav:'biography'
		});

		$stateProvider.state('Painting',{
			url:'/painting',
			templateUrl:'views/painting.html',
			controller:'paintCTRL',
			activeNav:'painting'
		});
		$urlRouterProvider.otherwise('/home');
	}]);

	portfolio.controller('headerCTRL',['$scope','$state',function($scope,$state){
		$scope.meSVG = 'images/MB/logo.svg';
		$scope.mePNG = 'images/MB/logo.png';
		$scope.urls = [
			{ 'Path':'home', 'Name':'Home', 'Type':'home' },
			{ 'Path':'websites', 'Name':'Website', 'Type':'websites' },
			{ 'Path':'designs', 'Name':'Designs', 'Type':'designs' },
			{ 'Path':'contact', 'Name':'Contact', 'Type':'contact' },
			{ 'Path':'biography', 'Name':'Biography', 'Type':'biography' },
			{ 'Path':'painting', 'Name':'Painting', 'Type':'painting' }
		];
	}]);

	portfolio.controller('footerCTRL',['$scope','$http',function($scope,$http){
		var today = new Date();
		var year = today.getFullYear();
		$scope.newYear = year;
		$scope.socialLinks = [
			{
				'Link':'https://www.facebook.com/michelBeaubienWeb',
				'Name':'Facebook',
				'SVG':'images/footer/facebook.svg',
				'PNG':'images/footer/facebook.png'
			},{
				'Link':'https://www.linkedin.com/profile/view?id=410321420',
				'Name':'LinkedIn',
				'SVG':'images/footer/linked.svg',
				'PNG':'images/footer/facebook.png'
			}
		];
	}]);

	portfolio.controller('homeCTRL',['$scope','$http',function($scope,$http){
		$http.get('latest.json').success(function(data){
			$scope.latests = data.Latests;
			//console.log($scope.latests);
		});
	}]);

	portfolio.controller('siteCTRL',['$scope','$http',function($scope,$http){

	}]);

	portfolio.controller('designCTRL',['$scope','$http',function($scope,$http){

	}]);

	portfolio.controller('contactCTRL',['$scope','$http',function($scope,$http){

	}]);

	portfolio.controller('bioCTRL',['$scope','$http',function($scope,$http){

	}]);

	portfolio.controller('paintCTRL',['$scope','$http',function($scope,$http){

	}]);

})();