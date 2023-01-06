var updateTeamBtn = document.getElementById("updateTeamBtn");
var teamForm = document.getElementById("teamForm");
var teamSelect = document.getElementById("teamSelect");
var updatePostcodeBtn = document.getElementById("updatePostcodeBtn");
var postcodeForm = document.getElementById("postcodeForm");
var postcodeInput = document.getElementById("postcodeInput");

// An array of English Premier League teams
var teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Bournemouth", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Leeds", "Leicester", "Liverpool", "Manchester City", "Manchester United", "Newcastle", "Nottingham Forest", "Southampton", "Tottenham", "West Ham", "Wolves"];

var postCodes = ["N51BU","B66HE","TW80NT","BN19BL","BH77AF","SW61HS","SE256PU","L44EL","SW66HH","LS110ES","LE27FL","L40TH","M113FF","M160RA","NE14ST","NG25FJ","SO145FP","N170AP","WD180ER","E202ST","WV14QR"];

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
  localStorage.setItem("postcode", postcodeInput.value);

  // Close the modal
  $("#postcodeModal").modal("hide");
  });
