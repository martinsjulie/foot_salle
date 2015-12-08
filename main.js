
/*Function for team and Player*/
function add(eq) {
  /*Player*/
  for (var i = 1; i <= 5; i++) {
    var player = document.getElementById("team" + eq + "Player" + i + "Name").value;
    document.getElementById("team" + eq + "Player" + i).innerHTML = player;
  }
  /*Team*/
  var team = document.getElementById("inputTeam" + eq);
  elems = document.getElementsByName("team" + eq);
  for (i = 0; i < elems.length; i++) {
    elems[i].innerHTML = team.value;
  }
}
/********************/
