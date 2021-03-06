//SERVICES MANAGE DATA BETWEEN ANGULAR AND BACK END


(function() {

	angular
		.module('piratesApp')
		.service('PirateService', PirateService)

		function PirateService($http){
		 	const BASE_URL = '/api/pirates'

			this.getPirates = function(){
				return $http.get(BASE_URL)
			}

			this.createPirate = function(newPirate){
				return $http.post(BASE_URL, newPirate); //on server req.body.pirate
			}

			this.getPirate = function(id){
				return $http.get(BASE_URL + '/' + id)
			}

			this.deletePirate = function(id){
				return $http.delete(BASE_URL + '/' + id)
			}

			this.updatePirate = function(data){
				return $http.put(BASE_URL + '/' + data.pirate.id, data) //on server req.body.pirate
			}
		}

		PirateService.$inject = ['$http']
})()