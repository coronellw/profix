profix.controller('IndexCtrl',['$scope','Api', function($scope, Api){
	$scope.title = "Página principal";
	$scope.imei ="";
	$scope.celular = {};
	$scope.buscarIMEI = function(){
		Api.ImeiInfo.byImei({imei: $scope.imei}, 
			function(response){
				$scope.celular = response;
				console.dir($scope.celular);
			},
			function(a){
				console.log(a);
				alert("no response from server, check");
			});
	};
}]);

profix.controller('ErrorCtrl',['$scope', function($scope){
	$scope.title = "Página de error";
}]);

profix.controller('SidebarCtrl',['$scope','Api',function($scope, Api){
	$scope.title = "Accesos directos";
	$scope.accesos = Api.Access;
}]);

profix.controller('createUserCtrl',['$scope', 'tiposUsuario', 'tiposContacto', function($scope, tiposUsuario, tiposContacto){
	$scope.title = "Crear usuario";
	$scope.description = "Proporcione los datos para crear un usuario, este es el controlador correcto";

	$scope.tiposUsuario = tiposUsuario;
	$scope.tiposContacto = tiposContacto;
	$scope.usuario = {contactos:[],tipoUsuario:{nombre:"Elija una opcion"}};
	$scope.contacto = {tipo:{nombre:"Haga una elección"}};
	

	$scope.addContacto = function(){
		$scope.usuario.contactos.push($scope.contacto);
		$scope.contacto = {tipo:{nombre:"Haga una elección"}};
	};

	$scope.deleteContacto = function(indice){
		var c = confirm("Esta seguro de borrar este contacto?");
		if (c) {
			$scope.usuario.contactos.splice(indice, 1);
		}
	}
}])