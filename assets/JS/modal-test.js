var updateTeamBtn = document.getElementById("updateTeamBtn");
var teamForm = document.getElementById("teamForm");
var teamSelect = document.getElementById("teamSelect");
var updatePostcodeBtn = document.getElementById("updatePostcodeBtn");
var postcodeForm = document.getElementById("postcodeForm");
var postcodeInput = document.getElementById("postcodeInput");

// An array of English Premier League teams
var teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton & Hove Albion", "Burnley", "Chelsea", "Crystal Palace", "Everton", "Leeds United", "Leicester City", "Liverpool", "Manchester City", "Manchester United", "Newcastle United", "Norwich City", "Southampton", "Tottenham Hotspur", "Watford", "West Ham United", "Wolverhampton Wanderers"];

// Populate the select element with the team options
teams.forEach(function(team) {
  var option = document.createElement("option");
  option.value = team;
  option.text = team;
  teamSelect.appendChild(option);
});

// Save the selected team to local storage when the form is submitted
teamForm.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("favouriteTeam", teamSelect.value);

  // Close the modal
  $("#teamModal").modal("hide");
});

// Save the entered postcode to local storage when the form is submitted
postcodeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("postcode", postcodeInput.value.replace(/\s/g,''));

  // Close the modal
  $("#postcodeModal").modal("hide");
  });
