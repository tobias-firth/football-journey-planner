// Click button to update favorite team
    // Add event listener for when button is clicked, a modal appears requesting the user to enter their favourite team and their nearest train station

   // Array of teams
var teams = [
  "Arsenal",
  "Aston Villa",
  "Bournemouth",
  "Brighton & Hove Albion",
  "Burnley",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Leicester City",
  "Liverpool",
  "Manchester City",
  "Manchester United",
  "Newcastle United",
  "Norwich City",
  "Southampton",
  "Tottenham Hotspur",
  "Watford",
  "West Ham United",
  "Wolverhampton Wanderers",
  "Leeds United"
];

// Get the modal element (need id of the model)
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
  localStorage.setItem("favoriteTeam", team);

  // Close the modal
  modal.style.display = "none";
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

// Store user input favourite team as a variable
    // Store this in local storage

    // var teamInput = "arsenal"

    // localStorage.setItem("favouriteTeam",teamInput);
    localStorage.getItem("favouriteTeam");


// Click button to update location
// Add event listener for when button is clicked, a modal appears

// Store user input of location as a variable
    // getelementbyid value from input
    // Store this in local storage

// Store todays date as variable in format YYYY-MM-DD
    var today = moment().format("YYYY-MM-DD");
    console.log(today);


// Print the next eight fixtures for the team in the aside

// Array to store the home teams for the next eight games
    var homeTeams = [];

    // Array to store the away teams for the next eight games    
    var awayTeams = [];

    // Array to store the dates of the next eight games    
    var dates = [];

    // Array to store the kick off times for the next eight games
    var times = [];

    // Array to store the stadia the next eight games are played in
    var stadia = [];

    // Array to store the cities the next eight games are played in
    var cities = [];

    // Array to store the next eight fixtures for the inputted team (homeTeam vs awayTeam)
    var fixtureList = [];

    // Array to store the locations of the next eight games (stadium, city)
    var locations = [];

    // Array to store the dates and times of the next eight games (dates, times)
    var datesAndTimes = [];

    // Element which the fixture list will be appended to
    var fixtureListContainer = $(".content");
    // Append a ul element to the fixtureListContainer to create a list
    var fixtureListEl = $(fixtureListContainer).append("<ul>")

    // settings for the football API
    var settings = {
        "url": "https://v3.football.api-sports.io/teams?name=" + input + "",
        "method": "GET",
        "timeout": 0,
        "headers": {
            // ADD YOUR OWN API KEY HERE
            "x-apisports-key": "", 
        },
      };
      

      // Fetch the team ID from the API based on the inputted value
      $.ajax(settings).done(function (response) {
        var teamId = response.response[0].team.id;
        
        var fixtures = {
            "url": "https://v3.football.api-sports.io/fixtures?team=" + teamId + "&next=8&league=39",
            "method": "GET",
            "timeout": 0,
            "headers": {
                // ADD YOUR OWN API KEY HERE
                "x-apisports-key": "", 
            },
          };
        
          $.ajax(fixtures).done(function (results) {
            console.log(results)

            for (var i=0; i<8; i++) {
                // Store, for each fixture, the home team in an array
                homeTeams.push(results.response[i].teams.home.name);

                // Store, for each fixture, the away team in an array
                awayTeams.push(results.response[i].teams.away.name);

                // Store, for each fixture, the date of the match in an array
                dates.push(moment(results.response[i].fixture.date).format("dddd, Do MMMM YYYY"));

                // Store, for each fixture, the time of the match in an array
                times.push(moment(results.response[i].fixture.date).format("HH:mm"));

                // Store, for each fixture, the stadium in an array
                stadia.push(results.response[i].fixture.venue.name);

                // Store, for each fixture, the city in an array
                cities.push(results.response[i].fixture.venue.city);

                // Store the fixtures in an array (home team vs away team) 
                fixtureList.push(homeTeams[i] + " vs. " + awayTeams[i]);

                // Store, for each fixture, the locations in an array (stadium and city)
                locations.push(stadia[i] + ", " + cities[i])

                // Store, for each fixture the date and time in an array
                datesAndTimes.push(dates[i] + ", " + times[i]);

                $(fixtureListEl).append("<li> <h4>" + fixtureList[i] + "</h4><hr>" + "<h5>" + locations[i] + "</h5>" + "<p>" + datesAndTimes[i] + "</p></li>")
            }

          });
          console.log(fixtureEl)


     });


    // Get next 8 fixtures for the team
    // For loop, insert a list element for each match and a button to plan the journey

// When user clicks on the "plan" button, plan journey from users home location to location of the match
// Print map of journey
// Print stages of journey


//----------------- extra stuff -------------

// Print the club logo of favourite team in top corner of the header
    // get the logo from the api
    // add img element with src attribute

// Add saved journeys onto the page or a different page??