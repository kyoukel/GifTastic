
// Initial array of super heroes
var movies = ["Wonder Woman", "Hulk", "Captain America", "Superman", "Thor", "Iron Man", "Spider-Man", "Guardians of the Galaxy", "Deadpool", "Batman", "X-Men", "Ant-Man", "Black Panther", "Suicide Squad", "Flash", "Supergirl", "Green Lantern", "Daredevil", "Elektra", "Autobots"];

$('button').on('click', function(){
    // alert("Button Clicked!");
    var h = $(this).attr('data-search');
    console.log(h);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + h + "&" + "api_key=S0s43WOAT4jzNdL4GICYdNrVfDl0MWMH&limit=10";
    console.log(queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url:queryURL, 
        method: 'GET'
    }).then(function(response) {
        console.log(response.data[0].rating);

    // Creating a div to hold the gifs
        var heroGIF = $("<div class='hero'>");

    // Storing the rating data
        var rating = response.data[0].rating;
        console.log(rating);
        
    })
        


})
        // FROM BUTTON TRIGGERED VIDEO
        // .done(function(response){
        //     console.log(response);
        //     for(var i=0; i<response.data.length; i++) {
        //         $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+"</p>");
        //         $('#GIFArea').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
        //     }





