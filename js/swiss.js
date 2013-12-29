var players = [
		// TODO: Delete these. 
		{name:"steve"}, 
		{name:"bob"}
	],
	matches = [],
	totalRounds = 0,
	roundsPlayed = 0,
	currentRound = 0,
	pairings = [];
function SwissCtrl($scope) {
	// Array of player objects
	$scope.players = players;
	// Array of match objects
	$scope.matches = matches;
	$scope.totalRounds = totalRounds;
	$scope.roundsPlayed = roundsPlayed;
	$scope.currentRound = currentRound;
	$scope.pairings = [];
	$scope.displayRounds="hidden";

	$scope.getPlayerTotal = function() {
		return $scope.players.length;
	}
	$scope.getCurrentRound = function() {
		return $scope.currentRound;
	}
	$scope.addPlayer = function() {
		$scope.players.push({
			name : $scope.playerName,

			});
		$scope.playerName='';
	}
	$scope.generatePairings = function() {
		$scope.currentRound=1;
		$scope.players = assignPlayerNumbers($scope.players)
		$scope.displayRounds = '';
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

/** Returns a true if the passed parameter is an even number.
 *  Returns false otherwise.
 *  @param number {Number} the number to check.
 */
function isEven (number) {
	return !isNaN(number) && (number % 2 == 0);
}

/** Returns a random number from 0 to that number
 *  @param length {Number} the length of the array to pick a random index from
 */
function getRandomIndex (length) {
	var random = Math.floor((Math.random()*length));
	return random;
}

/** Returns either 0.333 or the match win percentage rounded to thousandths, 
 *  whichever is greater.
 *  @param matches {Number} the number of matches the player has played
 *  @param points {Number} the number of points the player has earned
 */
function calculateMWP (matches, points) {
	var percentage = Math.round(points/(matches*3)*1000)/1000;
	return 0.333 > percentage ? 0.333 : percentage;
}

/** Iterates through players list to find a matching playerId and returns
 *  that player object.
 *  @param num {Number} the number to check
 */
function getPlayerByNum (num) {
	for (var i = 0; i < players.length; i++) {
		if (num == players.pId) {
			return players[i];
		}
	}
}

/** Returns a match object with the players, round number, and match ID.
 *  @param p1, p2 {Player} The player objects to add to the match.
 *  @param round {Number} The round number
 *  @param id {Number} the match number for this round
 */
function createMatchObj (p1, p2, round, id) {
	var match = {};
	// Assemble the match ID string
	match.mId = "r" + round + "m" + id;

	// Special bye logic
	if (p1 == '0') {
		match.player1 = "BYE";
		match.player2 = p2;
	}
	else if (p2 == '0') {
		match.player1 = p1;
		match.player2 = "BYE";
	}

	// Create a normal match
	else {
		match.player1 = p1;
		match.player2 = p2;
		match.round = round;
	}
	console.log("Returning match: " + match.mId);
	return match;

}

function initialPairings (playerList) {
	var pairings = [],
		FIRST_ROUND = 1,
		BYE_NUMBER = 0,
		CROSS_OFF = 1,
		list = [],
		expectedMatches;
	for (var i = 0; i < playerList.length; i++) {
		list.push(playerList[i]);
	}
	// Add the bye match if necessary
	if (!isEven((list.length))) {
		var suckaIndex = getRandomIndex(list.length);
		pairings.push(createMatchObj(list[suckaIndex], BYE_NUMBER, 
			FIRST_ROUND, BYE_NUMBER));
		if (suckaIndex > -1) {
			console.log("creating the bye")
			list.splice(suckaIndex, CROSS_OFF);
		}
	}
	// Determine number of matches necessary
	expectedMatches = list.length/2;

	// Get random pairings
	for (var i = 1; i <= expectedMatches; i++) {
		var p1Index = getRandomIndex(list.length),
			player1 = list[p1Index];
		if (p1Index > -1) {
			console.log("crossing off player"+p1Index);
			list.splice(p1Index, CROSS_OFF);
		}
		var p2Index = getRandomIndex(list.length),
			player2 = list[p2Index];
		if (p2Index > -1) {
			console.log("crossing off player"+p2Index);
			list.splice(p2Index, CROSS_OFF);
		}
		pairings.push(createMatchObj(player1, player2, FIRST_ROUND, i));
	}
	return pairings;
}

function refreshPlayers (playerlist, matchList) {
	for (var i = 0; i < playerList.length; i++) {
		playerList[i].points = 0;
	}
	for (var i = 0; i < matchList.length; i++) {

	}
}

/** Gets the standings for the current state 
 *
 */
function getStandings (currentRound, playerList, matchList) {
	var standings = [],
		rankings = {};
	if (currentRound > 1) {
		for (var i = 0; i < matchList.length; i++) {
			// Get players in order of points

			// Get players OMW%
			// Get players GW%
			// Get players OGW%
		}
	}
	else if (currentRound == 1) {
		// Print out a list of zero record players
	}
	else {
		// Return an empty standings object
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
	mId : "r2m3",
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