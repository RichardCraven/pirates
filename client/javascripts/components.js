(function(){

	angular 
		.module('piratesApp')
		.component('ngPirateShow', {
				bindings: {
					pirate: '<'
				},
				controller: 'ShowPirateController',
				controllerAs: 'vm',
				templateUrl: '../views/pirates/show.html'
			
		})

})()


// (function(){

// 	angular 
// 		.module('piratesApp')
// 		.directive('ngPirateShow', function(){
// 			return {
// 				scope: {
// 					pirate: '<'
// 				},
// 				controller: 'ShowPirateController',
// 				controllerAs: 'vm',
// 				templateUrl: '../views/pirates/show.html'
// 			}
// 		})

// })()
// ^ this is how it's done with directive instead of component