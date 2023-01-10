// Click button to update favorite team
    // Add event listener for when button is clicked, a modal appears requesting the user to enter their favourite team and their nearest train station

// Store user input favourite team as a variable
    // Store this in local storage
    
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

    // Arrat to store the postcodes of the next eight games

    var gamePostcodes = [];

    // Element which the fixture list will be appended to
    var fixtureListContainer = $(".content");
    // Append a ul element to the fixtureListContainer to create a list
    var fixtureListEl = $(fixtureListContainer).append("<ul>")

    // settings for the football API
    var settings = {
        "url": "https://v3.football.api-sports.io/teams?name=" + teamSelect + "",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "x-apisports-key": "", 
            // ADD YOUR OWN API KEY HERE
            "x-apisports-key": "ae503658c99a65f7900d5f975c7c3500", 
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
                "x-apisports-key": "ae503658c99a65f7900d5f975c7c3500",
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

                for (var j=0; j<20; j++){
                    if (homeTeams[i]===teams[j]) {
                        gamePostcodes.push(postCodes[j])
                    }
                }
                    
            }
            console.log(homeTeams)
            console.log(teams)
            console.log(fixtureList)
            console.log(gamePostcodes);


            // Show fixtures in a list on webpage
            for (var k=0; k<fixtureList.length; k++) {
                $("#fixture-" + k + "").text(fixtureList[k]);
                $("#location-" + k + "").text(locations[k]);
            }
          });
        
          
        

     });


// When user clicks on the "plan" button, plan journey from users home location to location of the match



// Print map of journey
// Print stages of journey


//----------------- extra stuff -------------

// Print the club logo of favourite team in top corner of the header
    // get the logo from the api
    // add img element with src attribute

// Add saved journeys onto the page or a different page??