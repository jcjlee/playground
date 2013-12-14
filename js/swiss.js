function SwissCtrl($scope) {
	// Array of player objects
	$scope.players = [
		// TODO: Delete these. 
		{name:"steve"}, 
		{name:"bob"}
	];
	// Array of match objects
	$scope.matches = [];
	$scope.totalRounds = 0;
	$scope.roundsPlayed = 0;
	$scope.currentRound = 0;

	$scope.getPlayerTotal = function() {
		return $scope.players.length;
	}
	$scope.addPlayer = function() {
		$scope.players.push({name:$scope.playerName});
		$scope.playerName='';
	}
	$scope.generatePairings = function() {
		$scope.round=1;
		$scope.playerRecords = numberPlayers($scope.players);
		displayStandings();
	}
}
/** Returns a list of players with each player numbered.
 *  @param list {Array} the list of players
 */
function assignPlayerNumbers (list) {
	for(var i = 0; i < list.length; i++) {
			list[i].pId=i+1;
		}
	return list;
}

/** Gets the standings for the current state 
 *
 */
function getStandings (currentRound, playerList, matchList) {
	var standings = [];
	if (currentRound > 0) {
		for (var i = 0; i < matchList.length; i++) {
			//Get players in order of points
			//Get players OMW%
			//Get players GW%
			//Get players OGW%
		}
	}
	return standings;
}

/** Gets the match points earned for a player
 *  @param match {Object} The match object in question
 *  @param playerId {int} The ID of the player in question
 */
function getMatchResult (match, playerId) {
	var poc = playerId == match.p1 ? match.p1 : match.p2;
	if (p1games > p2games) {
		return match.p1 == poc ? 3 : 0;
	}
	else if (p1games < p2games) {
		return match.p1 == poc ? 0 : 3;
	}
	else if (p1games=p2games) {
		return 1;
	}
}

// match
var matchTemplate = {
	mId : 23,
	round: 3,
	p1 : 3,
	p2 : 5,
	p1g : 1,
	p2g : 2
}

// player
var playerTemplate = {
	name : "steve", 
	pId : 3,
	matches : [2,5,9,19],
	played : [1,5,9]
}