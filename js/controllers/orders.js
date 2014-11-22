var profix = angular.module('profix');
profix.controller('createOrderCtrl',['$scope', 'Api', function($scope, Api){
	$scope.title="Orden de servicio";
	$scope.description="Celulares";
	$scope.fecha = new Date();
	$scope.orden = {ingreso: {}};
	$scope.orden.cliente = {how:{name:"Seleccione una opción", id:null }};
	$scope.orden.celular = {marca: {name:"Seleccione una marca", id:null}, modelo:{name:"seleccione un modelo",id:null}};
	
	$scope.hows = [{name: "Un amigo o familiar", id:1},{name:"Facebook", id:2},{name:"Twitter", id:3},{name:"Flyers", id:4}, {name:"IQ Electronics", id:5}];
	$scope.marcas = Api.Brands;
	$scope.modelos = Api.Models;
	$scope.fallas = Api.Failures;
	$scope.estados = Api.Statuses;
	$scope.tiposPago = [{name:"Efectivo", id:1},{name:"Tarjeta credito", id:2}, {name: "Tarjeta debito", id:3}];
	
	$scope.orden.estado = $scope.estados[0];
	$scope.orden.tipoPago = $scope.tiposPago[0];

	$scope.setHow = function(how){
		$scope.orden.cliente.how = how;
	};

	$scope.format = 'dd-MM-yyyy';

	$scope.openIngreso = function($event){
		$event.preventDefault();
		$event.stopPropagation();

		$scope.openedIngreso = true;
	};

	$scope.openSalida = function($event){
		$event.preventDefault();
		$event.stopPropagation();

		$scope.openedSalida = true;
	};

	$scope.dateOptions = {
		formatYear: 'yyyy',
		startingDay: 1
	};
}]);

profix.controller('updateOrderCtrl',['$scope',function($scope){

}]);

profix.controller('deleteOrderCtrl',['$scope',function($scope){

}]);

profix.controller('listOrderCtrl',['$scope',function($scope){

}]);

