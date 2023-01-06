// Array of teams
var teams = [
    "Arsenal",
    "Aston Villa",
    // Add names of other teams
  ];

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("updateBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the form element
var form = document.getElementById("teamForm");

// When the user submits the form, store the team in local storage
form.onsubmit = function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the selected team
  var select = document.getElementById("teamSelect");
  var team = select.options[select.selectedIndex].value;

  // Store the team in local storage
  localStorage.setItem("favouriteTeam", team);

  // Close the modal
  $('#myModal').modal('hide');
}

// Get the select element
var select = document.getElementById("teamSelect");

// Add an option element for each team
teams.forEach(team => {
  var option = document.createElement("option");
  option.value = team;
  option.text = team;
  select.add(option);
});