let teamFormEl = document.getElementById("teamForm");

// Store todays date as letiable in format YYYY-MM-DD
let today = moment().format("YYYY-MM-DD");
console.log(today);

let selectedTeam = ''

let gameStadium = ''
let arriveTime = ''
let gameDate = ''

// Print the next eight fixtures for the team in the aside

// Array to store the home teams for the next eight games
let homeTeams = [];

// Array to store the away teams for the next eight games    
let awayTeams = [];

// Array to store the dates of the next eight games    
let dates = [];

// Array to store the kick off times for the next eight games
let times = [];

// Array to store the stadia the next eight games are played in
let stadia = [];

// Array to store the cities the next eight games are played in
let cities = [];

// Array to store the next eight fixtures for the inputted team (homeTeam vs awayTeam)
let fixtureList = [];

// Array to store the locations of the next eight games (stadium, city)
let locations = [];

// Array to store the dates and times of the next eight games (dates, times)
let datesAndTimes = [];

// Arrat to store the postcodes of the next eight games

let gamePostcodes = [];

// Element which the fixture list will be appended to
let fixtureListContainer = $(".content");
// Append a ul element to the fixtureListContainer to create a list
let fixtureListEl = $(fixtureListContainer).append("<ul>")

// Save the selected team to local storage when the form is submitted
teamFormEl.addEventListener("submit", function(event) {
event.preventDefault();
homeTeams = [];
awayTeams = [];
dates = [];
times = [];
stadia = [];
cities = [];
fixtureList = [];
locations = [];
datesAndTimes = [];
gamePostcodes = [];
selectedTeam = teamSelect.value
localStorage.setItem("favouriteTeam", selectedTeam);
// Close the modal
$("#teamModal").modal("hide");
console.log(selectedTeam)
;

// settings for the football API
let settings = {
    "url": "https://v3.football.api-sports.io/teams?name=" + selectedTeam + "",
    "method": "GET",
    "timeout": 0,
    "headers": { 
        // ADD YOUR OWN API KEY HERE
        "x-apisports-key": "a7856a2aec583eaab6fcf9d5b66d58ba", 

    },
  };
  

  // Fetch the team ID from the API based on the inputted value
  $.ajax(settings).done(function (response) {
    let teamId = response.response[0].team.id;
    let fixtures = {
        "url": "https://v3.football.api-sports.io/fixtures?team=" + teamId + "&next=8&league=39",
        "method": "GET",
        "timeout": 0,
        "headers": {
            // ADD YOUR OWN API KEY HERE
            "x-apisports-key": "a7856a2aec583eaab6fcf9d5b66d58ba",

        },
      };
    
      $.ajax(fixtures).done(function (results) {
        console.log(results)

        for (let i=0; i<8; i++) {
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

            for (let j=0; j<20; j++){
              if (homeTeams[i]===teams[j]) {
                  gamePostcodes.push(postCodes[j])
              }
          }
          for (let m=0; m<8; m++) {
            if (homeTeams[m] === selectedTeam){
              $("#game-" + m).addClass("fixtureHome");
            }
            else {
              $("#game-" + m).addClass("fixtureAway");
            } 
          }
         } 
              
              // Show fixtures in a list on webpage
          for (var k=0; k<fixtureList.length; k++) {
            $("#fixture-" + k + "").text(fixtureList[k]);
            $("#location-" + k + "").text(locations[k]);
            $("#time-" + k + "").text(datesAndTimes[k]);
        
          }
        console.log(homeTeams)
        console.log(teams)
        console.log(fixtureList)
        console.log(gamePostcodes);


        // Show fixtures in a list on webpage
        for (let k=0; k<fixtureList.length; k++) {
            $("#fixture-" + k + "").text(fixtureList[k]);
            $("#location-" + k + "").text(locations[k]);
        }
      });
      
      for (let j=0; j<8; j++) {
        $("#game-button-" + j).on('click',function(event){
          gameStadium = stadia[j];
          gameDate = dates[j];
          gameTime = times[j].split(':');
          arriveTime = [gameTime[0]-1,gameTime[1]].join(':');
          document.getElementById("end").value=gameStadium;
          console.log(gameStadium);
          console.log(gameDate);
          console.log(arriveTime);
        })
      }
    })
});