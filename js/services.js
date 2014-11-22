var profixServices = angular.module('profixServices',['ngResource']);

profixServices.factory('Api', ['$resource', function($resource){
	return {
		TiposContacto: $resource('http://localhost/wsprofix/tiposContacto/:id',{id: '@id'}),
		TiposUsuario: $resource('http://localhost/wsprofix/tiposUsuario/:id',{id: '@id'}),
		Marcas: $resource('localhost/wsprofix/marcas/:id',{id: '@id'},{
			porNombre: {
				method: 'GET',
				params: {nombre: '@nombre'},
				url: "localhost/wsprofix/marcas/:nombre"
			}
		}),
		Modelos : $resource('localhost/wsprofix/modelos/:id',{id: '@id'},{
			porMarca : {
				method: 'GET',
				params: {marca: '@marca'},
				url: "localhost/wsprofix/modelos/marca/:marca"
			},
			porNombre :{
				method: 'GET',
				params: {nombre: '@nombre'},
				url: "localhost/wsprofix/modelos/nombre/:nombre"	
			}
		}),
		Brands : [
					{name: "Apple", id:1},
					{name: "Samsung",id:2},
					{name:"Sony Ericsson",id:3},
					{name:"LG",id:4},
					{name:"Motorola",id:5}
				],
		Models : [
					{name:"iPhone 6", id:1, models:["A1549","A1586"], storage:[16, 64, 128],storage_unit:"GB", marca: 1}, 
					{name:"Galaxy S5", id:2, models:["SM-G900F","SM-G900I","SM-G900A", "SM-G900T"], storage:[16,32], storage_unit:"GB", marca:2},
					{name:"Moto G", id:3, models:["XT1032"],storage:[16,32], storage_unit:"GB", marca:5},
					{name:"iPhone 5s", id:4, models:["A1549","A1586"], storage:[16, 32, 64],storage_unit:"GB", marca: 1}, 
					{name:"Galaxy Note 3", id:5, models:["N9000","N9002","N9005"], storage:[16,32,64], storage_unit:"GB", marca:2},
					{name:"Moto X", id:6, models:["XT1032"],storage:[16,32], storage_unit:"GB", marca:5}
				],
		Failures : [
					{name:"Display (LCD)", id:1},
					{name:"Cristal (Cover Glass)", id:2},
					{name:"Display + Cristal", id:3},
					{name:"Bateria", id:4},
					{name:"Centro de carga", id:5}
				],
		Access : [
					{url:'/', name: 'Principal'},
					{url:'/orden/nueva', name: 'Nueva orden'},
					{url:'/orden/reingreso', name: 'Garantía'},
					{url:'/orden/cerrar', name: 'Entregar orden'},
					{url:'/precios', name: 'Listar precios'},
					{url:'/cliente/nuevo', name: 'Crear cliente'}
				],
		Statuses : [
					{name:"En laboratorio",id:1},
					{name:"Diagnosticado",id:2},
					{name:"Reparado",id:3},
					{name:"Entregado",id:4},
					{name:"Esperando refaccion",id:5}
				]
	};
}]);

profixServices.factory('tiposContactoLoader',['Api','$q',
	function(Api, $q){
		return function(){
			var delay = $q.defer();
			Api.TiposContacto.query(function(tc){
				delay.resolve(tc);
			},function(){
				delay.reject("No se pudieron cargar los tipos de contacto");
			});
			return delay.promise;
		}
	}
]);

profixServices.factory('tiposUsuarioLoader',['Api','$q',
	function(Api,$q){
		return function(){
			var delay = $q.defer();
			Api.TiposUsuario.query(function(tu){
				delay.resolve(tu);
			},function(){
				delay.reject("No se pudieron cargar los tipos de usuario");
			});
		}
	}
]);