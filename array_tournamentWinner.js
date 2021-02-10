function tournamentWinner(competitions, results) {
  // Write your code here.
	let teams = {" " : 0} , bestTeam = ' ', winner= '';
	for ( let i = 0; i < competitions.length; i++) {
		if (results[i] === 0) {
			winner = competitions[i][1];
			if (teams.hasOwnProperty(winner)) {
				teams[winner] = teams[winner] + 3; 
			} else {
				teams[winner] = 3; 
			}
		} else {
			winner = competitions[i][0];
			if (teams.hasOwnProperty(winner)) {
				teams[winner] = teams[winner] + 3; 
			} else {
				teams[winner] = 3; 
			}
		}

		if (teams[bestTeam] < teams[winner]) bestTeam = winner;
	
	}

  return bestTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
