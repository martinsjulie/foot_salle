/*Function for team and Player*/
function add(eq) {
  stock(eq);
  afficher(eq);
}

function stock(eq) {
  /// stock equipe
  var team = document.getElementById("inputTeam" + eq);
  localStorage.setItem("team" + eq, team.value);
  //// stoker joueurs
  for (var j = 1; j <= 5; j++) {
    var player = document.getElementById("team" + eq + "Player" + j + "Name");
    localStorage["team" + eq + "Player" + j] = player.value;
  }
}

function afficher(eq) {
  // afficher equipe
  if (localStorage.getItem("team" + eq) == null) {

  } else {
    document.getElementById("team" + eq).innerHTML = localStorage.getItem("team" + eq);
  }
  /// afficher joueurs
  for (var j = 1; j <= 5; j++) {
    if (localStorage.getItem("team" + eq + "Player" + j) == null) {} else {
      document.getElementById("team" + eq + "Player" + j).innerHTML = localStorage.getItem("team" + eq + "Player" + j);
    }
  }
}

function loadTeamPlayers() {
  // afficher(1)
  for (eq = 0; eq <= 6; eq++) {
    afficher(eq);
  }
}
window.onload = loadTeamPlayers();
