var volunteer
var music
var food
var concert
var create
var eventfulURL

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