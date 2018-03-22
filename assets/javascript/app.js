console.log("It's alive!!!")
var volunteer
var music
var food
var concert
var create
var eventfulURL
var image

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

  $("#event-name-input").val("");
  $("#location-input").val("");
  $("#time-input").val("");
  $("#date-input").val("");
  // Clears all of the text-boxes//


  // Logs everything to console//
  console.log(newEvent.name);
  console.log(newEvent.location);
  console.log(newEvent.time);
  console.log(newEvent.date);

  // This needs to be changed to a modal???///
  alert("New Event Has Been Added");

//uploading photos/files to storage//
var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");
//listen for file selection//
fileButton.addEventListener("change", function(e){
     //Get file
    var file = e.target.files[0];
    //create a storage ref
    var storageRef = firebase.storage().ref("event_photos/" + file.name);
    //upload file
    var task = storageRef.put(file);
    //update progress bar
    task.on("state_changed ",
        function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {
        }, 
        function complete() {
        }
    );
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
        for(i=0; i<10; i++){
            music = JSON.parse(response)
            if(music.events.event[i].image === null){
                image = "https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }else{
                image = music.events.event[i].image.medium.url
            }
            // $("#musicPageInfo").append
            $("#mainContent").append(`<div class="card m-3 myCard" style="width: 18rem;">
                    <img class="card-img-top myCardImg" src=${image}>
                        <div class="card-body">
                            <p class="card-title"><a href="${music.events.event[i].url}">Performer: ${music.events.event[i].title}</a></p>
                            <p class="card-location">Location: ${music.events.event[i].venue_name}</p>
                            <p class="card-date">Date: ${music.events.event[i].start_time}</p>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    View More
                                </button>
                            <div class="dropdown-menu myDropDown" aria-labelledby="dropdownMenu2">
                                <p class="m-3">${music.events.event[i].description}</p>
                                <p class="m-3">${music.events.event[i].start_time}</p>
                                <p class="m-3">${music.events.event[i].venue_address}</p>
                            </div>
                        </div>
                    </div>
                </div>`) 
        }        
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
        food = JSON.parse(response)
        if(food.events.event[0].image === null){
            image = "https://images.pexels.com/photos/5929/food-salad-dinner-eating.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350"
        }else{
            image = food.events.event[0].image
        }
        // $("#foodPageInfo").append
        $("#mainContent").append(`<div class="card m-3 myCard" style="width: 18rem;">
				<img class="card-img-top myCardImg" src=${image}>
					<div class="card-body">
						<h5 class="card-title">${food.events.event[0].title}</h5>
						<div class="dropdown">
							<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								View More
							</button>
						<div class="dropdown-menu myDropDown" aria-labelledby="dropdownMenu2">
							<p class="m-3">fhchghj ndskjhj  hje  few w ekjfewlkwkdjvj hrwqh d;qihw</p>
						</div>
					</div>
				</div>
			</div>`) 
    })
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