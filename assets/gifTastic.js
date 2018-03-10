
// Initial array of super heroes
var superHeroes = ["Wonder Woman", "Hulk", "Captain America", "Superman", "Thor", "Iron Man", "Spider-Man", "Guardians of the Galaxy", "Deadpool", "Batman", "X-Men", "Ant-Man", "Black Panther", "Suicide Squad", "The Flash", "Supergirl", "Green Lantern", "Daredevil", "Elektra", "She-Ra"];

// Function for displaying data
function renderButtons() {

    // Deleting the hero buttons prior to ADDING NEW MOVIE BUTTONS
    // (this is necessary otherwise will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of superHeroes
    for (var i = 0; i < superHeroes.length; i++) {
        // Then dynamicaly generating buttons for each hero in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var b = $("<button>");
        // Adding a class of hero-btn to our button
        b.addClass("hero-btn");
        // Adding a data-attribute
        b.attr("data-name", superHeroes[i]);
        // Providing the initial button text
        b.text(superHeroes[i]);
        // console.log(b);

        // Adding the button to the buttons-view div
        $("#buttons-view").append(b);
    }
};    
  
// displayRatingInfo function re-renders the HTML to display the appropriate content
function displayRatingInfo() {

    var h = $(this).attr('data-name');
    // console.log(this);
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + h + "&api_key=S0s43WOAT4jzNdL4GICYdNrVfDl0MWMH&limit=10";
    // console.log(queryURL);
    // Creating an AJAX call for the specific hero button being clicked
    $.ajax({
        url:queryURL, 
        method: 'GET'
    }).then(function(response) {
        var results = response.data;
        // console.log(results);

        $('#heroes-view').empty();

            for(var i=0; i < results.length; i++) {
// Only taking action if the photo has an appropriate rating =======***NOT WHAT I WANTED TO DO***=============================================
                // if(results[i].rating === "g" || results[i].rating === "pg-13" || results[i].rating === "y" || results[i].rating === "r") {
                // $('body').prepend("<p>Rating: "+response.data[i].rating+"</p>");
                // $('body').prepend("<img src='"+response.data[i].images.fixed_height.url+"'>");
// ===========================================================================================================================================
                $('#heroes-view').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                $('#heroes-view').prepend("<img src='" + response.data[i].images.fixed_height_still.url + "'>");
            }
        });
};

// This function handles events when the submit button is clicked
$('#add-hero').on('click', function(event) {
    // alert("Button Clicked!");

    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var hero = $("#heroes-input").val().trim();
    // console.log(hero);

    // The superhero entered from the textbox is then added to our array
    superHeroes.push(hero);

    // calling renderButtons which handles the processing of our superHeroes array
    renderButtons();
});

$('.gif').on('click', function(event) {
    alert("button clicked!")
   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
   var state = $(this).attr("data-state");
   console.log(state);
   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
   // Then, set the image's data-state to animate
   // Else set src to the data-still value
   if (state === "still") {
     $(this).attr("src", $(this).attr("data-animate"));
     $(this).attr("data-state", "animate");
   } else {
     $(this).attr("src", $(this).attr("data-still"));
     $(this).attr("data-state", "still");
   }
 });

// ================EVENTS=================================
// $(document).on('click', '#add-hero');
$(document).on('click', '.hero-btn', displayRatingInfo);
// $(document).on('click', '', function() {} );
renderButtons();





