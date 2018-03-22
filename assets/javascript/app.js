console.log("It's alive!!!")
var volunteer
var music
var food
var concert
var create
var eventfulURL


//  Initialize Firebase//
 var config = {
    apiKey: "AIzaSyC_KjDmCKyHZm_U9NbGWx8CXsfJ6E_Udu0",
    authDomain: "gatherva-ef25f.firebaseapp.com",
    databaseURL: "https://gatherva-ef25f.firebaseio.com",
    projectId: "gatherva-ef25f",
    storageBucket: "gatherva-ef25f.appspot.com",
    messagingSenderId: "19856738575"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// Button for adding event
$("#add-event-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input//
  var eventName = $("#event-name-input").val().trim();
  var location = $("#location-input").val().trim();
  var time = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var date = $("#date-input").val().trim();//have not looked in to date yet//

  // Creates local object for holding event data//
  var newEvnet = {
    name: eventName,
    location: location,
    time: time,
    date: date,
  };

  // Uploads event data to the database//
  database.ref().push(newEvent);

  // Logs everything to console//
  console.log(newEvent.name);
  console.log(newEvent.location);
  console.log(newEvent.time);
  console.log(newEvent.date);

  // This needs to be changed to a modal???///
  alert("New Event Has Been Added");

//categories from eventful: music, food


//for volunteer from volunteermatch
$("#volunteer").on("click", function(){


})

//for music from eventful
$("#music").on("click", function(){
    eventfulURL = "http://api.eventful.com/json/events/search?app_key=DGg6NJ2vxT6RkDrW&location=Richmond,+VA&date=Next+week&c=music"
    $.ajax({
        url: eventfulURL,
        method: "Get",
    }).then(function(response){
        console.log(JSON.parse(response))
    })
})

//for food from eventful
$("#food").on("click", function(){
    eventfulURL = "http://api.eventful.com/json/events/search?app_key=DGg6NJ2vxT6RkDrW&location=Richmond,+VA&date=Next+week&c=food"
    $.ajax({
        url: eventfulURL,
        method: "Get",
    }).then(function(response){
        console.log(JSON.parse(response))
    })
})

//potentially deleting this
$("#concert").on("click", function(){


})

$("#create").on("click", function(){


})



//How to obtain list of categories
// eventfulURL = "http://api.eventful.com/rest/categories/list?app_key=DGg6NJ2vxT6RkDrW"
// $.ajax({
//     url: eventfulURL,
//     method: "Get",
// }).then(function(response){
//     console.log(response)
// })