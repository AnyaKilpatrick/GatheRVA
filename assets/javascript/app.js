var volunteer
var music
var food
var concert
var create
var eventfulURL
var image

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