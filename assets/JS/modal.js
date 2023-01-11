let updateTeamBtn = document.getElementById("updateTeamBtn");
let teamForm = document.getElementById("teamForm");
let teamSelect = document.getElementById("teamSelect");
let updatePostcodeBtn = document.getElementById("updatePostcodeBtn");
let postcodeForm = document.getElementById("postcodeForm");
let postcodeInput = document.getElementById("postcodeInput");
// let selectedTeam = ''
// An array of English Premier League teams
let teams = ["Arsenal", "Aston Villa", "Brentford", "Brighton", "Bournemouth", "Chelsea", "Crystal Palace", "Everton", "Fulham", "Leeds", "Leicester", "Liverpool", "Manchester City", "Manchester United", "Newcastle", "Nottingham Forest", "Southampton", "Tottenham", "West Ham", "Wolves"];

let postCodes = ["N51BU","B66HE","TW80NT","BN19BL","BH77AF","SW61HS","SE256PU","L44EL","SW66HH","LS110ES","LE27FL","L40TH","M113FF","M160RA","NE14ST","NG25FJ","SO145FP","N170AP","WD180ER","E202ST","WV14QR"];

// Populate the select element with the team options
teams.forEach(function(team) {
  let option = document.createElement("option");
  option.value = team;
  option.text = team;
  teamSelect.appendChild(option);
});

// // Save the selected team to local storage when the form is submitted
// teamForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   selectedTeam = teamSelect.value
//   localStorage.setItem("favouriteTeam", selectedTeam);
//   // Close the modal
//   $("#teamModal").modal("hide");
//   console.log(selectedTeam)
// });


// Save the entered postcode to local storage when the form is submitted
postcodeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("postcode", postcodeInput.value.replace(/\s/g,''));
  document.getElementById("start").value=postcodeInput.value.replace(/\s/g,'');
  // Close the modal
  $("#postcodeModal").modal("hide");
  });
