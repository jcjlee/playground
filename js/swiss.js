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
	$scope.pairings = [];

	$scope.getPlayerTotal = function() {
		return $scope.players.length;
	}
	$scope.addPlayer = function() {
		$scope.players.push({name:$scope.playerName});
		$scope.playerName='';
	}
	$scope.generatePairings = function() {
		$scope.round=1;
		$scope.players = assignPlayerNumbers($scope.players)
		$scope.pairings = initialPairings($scope.players);
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

function isEven (number) {
	return !isNaN(number) && (number % 2 == 0);
}

function createMatchObj (p1, p2, round) {
	var match = {};
	if (p1 == '0') {
		match.player1 = "BYE";
		match.player2 = p2;
	}
	else if (p2 == '0') {
		match.player1 = p1;
		match.player2 = "BYE";
	}
	else {
		match.player1 = p1;
		match.player2 = p2;
		match.round = round;
	}
	return match;

}

function initialPairings (playerList) {
	var pairings = [],
		FIRST_ROUND = 1,
		BYE_NUMBER = 0,
		list = [],
		expectedMatches;
	for (var i = 0; i < playerList.length; i++) {
		list.push(playerList[i]);
	}

	if (!isEven((list.length))) {
		var suckaIndex = getRandomIndex(list.length),
			sucka = list[suckaIndex];
		pairings.push(createMatchObj(sucka, BYE_NUMBER, 1));
		if (suckaIndex > -1) {
			list.splice(suckaIndex, 1);
		}
	}
	expectedMatches = list.length/2;
	for (var i = 0; i < expectedMatches; i++) {
		var p1Index = getRandomIndex(list.length),
			player1 = list[p1Index];
		if (p1Index > -1) {
			console.log(p1Index + " " + list.length);
			list.splice(p1Index, 1);
		}
		var p2Index = getRandomIndex(list.length),
			player2 = list[p2Index];
		if (p2Index > -1) {
			console.log(p2Index + " " + list.length);
			list.splice(p2Index, 1);
		}
		pairings.push(createMatchObj(player1, player2, FIRST_ROUND));
	}
	return pairings;
}

function getRandomIndex (length) {
	var random = Math.floor((Math.random()*length));
	return random;
}


/** Gets the standings for the current state 
 *
 */
function getStandings (currentRound, playerList, matchList) {
	var standings = [],
		rankings = {};
	if (currentRound > 0) {
		for (var i = 0; i < matchList.length; i++) {
			// Get players in order of points

			// Get players OMW%
			// Get players GW%
			// Get players OGW%
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