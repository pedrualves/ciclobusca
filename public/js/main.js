angular.module('ciclobusca', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/home', {
		    templateUrl: 'partials/home.html',
		    controller: 'HomeController'
		});

		$routeProvider.when('/fotos/post/:fotoId', {
		    templateUrl: 'partials/post.html',
		    controller: 'FotoController'
		});


		$routeProvider.otherwise({redirectTo: '/fotos/home'});

	});