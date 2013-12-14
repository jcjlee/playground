function SwissCtrl($scope) {
	$scope.players = [
		// TODO: Delete these. 
		{name:"steve"}, 
		{name:"bob"}
	];
	$scope.getPlayerTotal = function() {
		return $scope.players.length;
	}
	$scope.addPlayer = function() {
		$scope.players.push({name:$scope.playerName});
		$scope.playerName='';
	}
	$scope.generatePairings = function() {
		$scope.round=1;
		
	}
}

function numberPlayers (list) {
	for(var i = 0; i < list.length; i++) {
			list[i].playerNumber=i+1;
		}
	return list;
}

function randomNumber () {

}

function pairByRecord () {

}
