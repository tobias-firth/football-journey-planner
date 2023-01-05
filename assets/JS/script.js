// Click button to update favorite team
    // Add event listener for when button is clicked, a modal appears requesting the user to enter their favourite team and their nearest train station

    var input = "arsenal"

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
    // Store football api key
    // Store football api URL
    // var apiKey = "36f083f714bc286ffd7b350b91beee74"
    // var apiURL = "https://v3.football.api-sports.io/"

    var homeTeams = [];
    var awayTeams = [];
    var dates = [];
    var times = [];
    var stadia = [];
    var cities = [];
    var fixtureList = [];
    var locations = [];
    var datesAndTimes = [];

    var fixtureListContainer = $(".content");
    var fixtureListEl = $(fixtureListContainer).append("<ul>")

    var settings = {
        "url": "https://v3.football.api-sports.io/teams?name=" + input + "",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "x-apisports-key": "36f083f714bc286ffd7b350b91beee74", 
        },
      };
      
      $.ajax(settings).done(function (response) {
        var teamId = response.response[0].team.id;
        
        var fixtures = {
            "url": "https://v3.football.api-sports.io/fixtures?team=" + teamId + "&next=8&league=39",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "x-apisports-key": "36f083f714bc286ffd7b350b91beee74", 
            },
          };
        
          $.ajax(fixtures).done(function (results) {
            console.log(results)

            for (var i=0; i<8; i++) {
                // Store, for each fixture, the home team in an array
                homeTeams.push(results.response[i].teams.home.name);

                // Store, for each fixture, the away team in an array
                awayTeams.push(results.response[i].teams.away.name);

                // store, for each fixture, the date of the match in an array
                dates.push(moment(results.response[i].fixture.date).format("dddd, Do MMMM YYYY"));


                // store, for each fixture, the time of the match in an array
                times.push(moment(results.response[i].fixture.date).format("HH:mm"));

                // store, for each fixture, the stadium in an array
                stadia.push(results.response[i].fixture.venue.name);

                // store, for each fixture, the city in an array
                cities.push(results.response[i].fixture.venue.city);

                // store the fixtures in an array (home team vs away team) 
                fixtureList.push(homeTeams[i] + " vs. " + awayTeams[i]);

                locations.push(stadia[i] + ", " + cities[i])

                datesAndTimes.push(dates[i] + ", " + times[i]);

                $(fixtureListEl).append("<li> <h4>" + fixtureList[i] + "</h4><hr>" + "<h5>" + locations[i] + "</h5>" + "<p>" + datesAndTimes[i] + "</p></li>")
            }

            // console.log(fixtureList)
            // console.log(locations)
            // console.log(datesAndTimes);

            // for each fixture we need:
                // the date and time in suitable format, 
                // the stadium and/or city, 
                // the home team name, 
                // the away team name. 
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