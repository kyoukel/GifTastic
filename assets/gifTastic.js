
// Initial array of super heroes
var superHeroes = ["Wonder Woman", "Hulk", "Captain America", "Superman", "Thor", "Iron Man", "Spider-Man", "Guardians of the Galaxy", "Deadpool", "Batman", "X-Men", "Ant-Man", "Black Panther", "Suicide Squad", "Flash", "Supergirl", "Green Lantern", "Daredevil", "Elektra", "Ninja Turtles"];

// displayRatingInfo function re-renders the HTML to display the appropriate content
// function displayRatingInfo() {

    var h = $(this).attr('data-search');
    console.log(this);
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + h + "&" + "api_key=S0s43WOAT4jzNdL4GICYdNrVfDl0MWMH&limit=10";
    console.log(queryURL);
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url:queryURL, 
        method: 'GET'
    }).then(function(response) {
        console.log(response)

        // Creating a div to hold the gifs
        var heroDiv = $("<div class='hero'>");

        // Storing the rating data
        var rating = response.data[0].rating;
        // console.log(rating);
        
        // Creating an element to have the rating displayed
        var displayRating = $('<p>').text("Rating: " + rating);

        // Display the rating
        heroDiv.append(displayRating);
        console.log(rating);

       // Retrieving the URL for the image
       var imgURL = response.data[0].images.downsized.url;
       console.log(imgURL);

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);
        console.log(image);
        
        // Appending the image
        heroDiv.append(image);

        // // Putting the entire movie above the previous movies
        // $("#heroes-view").prepend(heroDiv);
    });
// };

// Function for displaying data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#heroes-view").empty();

    // Looping through the array of superHeroes
    for (var i = 0; i < superHeroes.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var b = $("<button>");
        // Adding a class of movie-btn to our button
        b.addClass("hero-btn");
        // Adding a data-attribute
        b.attr("data-name", superHeroes[i]);    // *****UNSURE OF WHICH DATA-ATTR TO USE OR
        // Providing the initial button text
        b.text(superHeroes[i]);
        // console.log(b);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(b);
    }
};    

// This function handles events when the submit button is clicked
    $('#add-hero').on('click', function(event){
        // alert("Button Clicked!");

        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var hero = $("#heroes-input").val().trim();
        console.log(hero);
        // The movie from the textbox is then added to our array
        superHeroes.push(hero);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
    });
    
    renderButtons();

        // FROM: BUTTON TRIGGERED VIDEO
//  $('button').on('click', function(){
    // alert("Button Clicked");
    // var h = $(this).attr('data-search');
    //  console.log(h);

// })
        
        // .done(function(response){
        //     console.log(response);
        //     for(var i=0; i<response.data.length; i++) {
        //         $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+"</p>");
        //         $('#GIFArea').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
        //     }





