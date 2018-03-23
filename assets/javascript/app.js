console.log("It's alive!!!")
var volunteer
var music
var food
var concert
var create
var eventfulURL

// ---------------------------------------------------CREATE YOUR OWN EVENT PAGE----------------------------------------------
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
$("form").submit( function(event) {
  event.preventDefault();

  // Grabs user input//
  var eventName = $("#event-name-input").val().trim();
  var details = $("#details-input").val().trim();
  var date = $("#date-input").val().trim();//have not looked in to date yet//
  var email = $("#inputEmail3").val().trim(); 

  // Creates local object for holding event data//
  var newEvent = {
    name: eventName,
    details: details,
    date: date,
    email: email,
  };

  // Uploads event data to the database//
  database.ref().push(newEvent);

  $("#event-name-input").val("");
  $("#details-input").val("");
  $("#date-input").val("");
  $("#inputEmail3").val("");
  // Clears all of the text-boxes//


  // Logs everything to console//
  console.log(newEvent.name);
  console.log(newEvent.details);
  console.log(newEvent.email);
  console.log(newEvent.date);

  // This needs to be changed to a modal???///
  alert("New Event Has Been Added");

//uploading photos/files to storage//
var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");
//listen for file selection//
     //Get file
    var file = fileButton.files[0];
    console.log('File: %O', file);

    //create a storage ref
    var storageRef = firebase.storage().ref("event_photos/" + file.name);
    //upload file
    var task = storageRef.put(file);
    //update progress bar
    task.on("state_changed",
        function progress(snapshot){
            console.log('Progress: %O', snapshot);
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {
        }, 
        function complete() {
        }
    );
});

//  Create Firebase event for adding new train to the database and a row in the html when a user adds an entry//
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());
  $("#createPageInfo").append(`

 <div class="card m-3 myCard" style="width: 18rem;">
            <img class="card-img-top myCardImg" src="assets/images/ev.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${childSnapshot.val().name}</h5>
                    <strong>${childSnapshot.val().date}</strong>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            View More
                        </button>
                    <div class="dropdown-menu myDropDown" aria-labelledby="dropdownMenu2">
                        <p class="m-3">${childSnapshot.val().details} </p>
                    </div>
                </div>
            </div>
        </div>


    `)

  });
//   --------------------------------------------------------------------------------------------------------

//categories from eventful: music, food


//for volunteer from volunteermatch
$("#volunteer").on("click", function(){


})
// -------------------------------------------------MUSIC PAGE---------------------------------------------------
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
// -------------------------------------------------------FOOD PAGE----------------------------------------------------------
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


// //potentially deleting this
// $("#concert").on("click", function(){


// })

// $("#create").on("click", function(){


// })



//How to obtain list of categories
// eventfulURL = "http://api.eventful.com/rest/categories/list?app_key=DGg6NJ2vxT6RkDrW"
// $.ajax({
//     url: eventfulURL,
//     method: "Get",
// }).then(function(response){
//     console.log(response)
// })