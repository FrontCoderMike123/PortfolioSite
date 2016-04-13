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

		$stateProvider.state('Website',{
			url:'/websites/:ID',
			templateUrl:'views/websiteDetails.html',
			controller:'siteDetailsCTRL',
			activeNav:'websites'
		});

		$stateProvider.state('Designs',{
			url:'/designs',
			templateUrl:'views/designs.html',
			controller:'designCTRL',
			activeNav:'designs'
		});

		$stateProvider.state('Design',{
			url:'/designs/:ID',
			templateUrl:'views/designDetails.html',
			controller:'designDetailsCTRL',
			activeNav:'designs'
		});

		$stateProvider.state('Contact',{
			url:'/contact',
			templateUrl:'views/contact.php',
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
		$scope.logoSVG = 'images/MB/logo.svg';
		$scope.logoPNG = 'images/MB/logo.png';
		$scope.$state = $state;
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
			},{
				'Link':'http://www.skype.com/en/',
				'Name':'MichelBeaubien53',
				'SVG':'images/footer/skype.svg',
				'PNG':'images/footer/skype.png'
			}
		];
	}]);

	portfolio.controller('homeCTRL',['$scope','$http',function($scope,$http){
		/*$http.get('json/latests.json').success(function(data){
			$scope.latests = data.Latests;
			//console.log($scope.latests);
		});*/
	}]);

	portfolio.controller('siteCTRL',['$scope','$http',function($scope,$http){
		$http.get('json/websites.json').success(function(data){
			$scope.websites = data.Websites;
			//console.log($scope.websites);
		});
	}]);

	portfolio.controller('siteDetailsCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
		$http.get('json/websites.json').success(function(details){
			$scope.Name = details.Websites[$stateParams.ID].Name;
			$scope.Desc = details.Websites[$stateParams.ID].Desc;
			$scope.Url = details.Websites[$stateParams.ID].Url;
			$scope.SVG = details.Websites[$stateParams.ID].SVG;
			$scope.PNG = details.Websites[$stateParams.ID].PNG;
		});
	}]);

	portfolio.controller('designCTRL',['$scope','$http',function($scope,$http){
		$http.get('json/designs.json').success(function(data){
			$scope.designs = data.Designs;
			//console.log($scope.designs);
		});
	}]);

	portfolio.controller('designDetailsCTRL',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
		$http.get('json/designs.json').success(function(details){
			$scope.Name = details.Designs[$stateParams.ID].Name;
			$scope.JPG = details.Designs[$stateParams.ID].JPG;
			$scope.Desc = details.Designs[$stateParams.ID].Desc;
		});
	}]);

	portfolio.controller('contactCTRL',['$scope','$http',function($scope,$http){

	}]);

	portfolio.controller('bioCTRL',['$scope','$http',function($scope,$http){

	}]);

	portfolio.controller('paintCTRL',['$scope','$http',function($scope,$http){

	}]);

})();