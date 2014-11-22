var profix = angular.module('profix',['ngRoute','profixServices','ui.bootstrap']);

function profixRouteConfig($routeProvider){
	$routeProvider.when('/',{
		controller: 'IndexCtrl',
		templateUrl: 'partials/main.html'
	})
	.when('/error',{
		controller: 'ErrorCtrl',
		templateUrl: 'partials/error.html'
	})
	.when('/orden/nueva', {
		controller: 'createOrderCtrl',
		templateUrl: "partials/orders/create.html"
	})
	.when('/cliente/nuevo', {
		controller : "createUserCtrl",
		resolve : {
			tiposUsuario: function(tiposUsuarioLoader){
				return tiposUsuarioLoader();
			},
			tiposContacto: function(tiposContactoLoader){
				return tiposContactoLoader();
			}
		},
		templateUrl : 'partials/clients/create.html'
	})
	.otherwise({
		redirectTo: '/error'
	});
}

profix.config(profixRouteConfig);