
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
        b.attr("data-name", superHeroes[i]);    // *****UNSURE OF WHICH DATA-ATTR TO USE OR
        // Providing the initial button text
        b.text(superHeroes[i]);
        // console.log(b);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(b);
    }
};    

// Event listener for all button elements
$('button').on('click', function() {
    // "this" refers to a button that was clicked
    var h = $(this).attr("data-");
    // Constructing the URL to search Giphy for the name of the hero 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    h + "&api_key=S0s43WOAT4jzNdL4GICYdNrVfDl0MWMH&limit=10";
    // Performing AJAX GET request
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response){
            console.log(response);
        // Storing an array of results in the results variable
        var results = response.data;
            console.log(results);
            //Looping over every result item.
            for(var i=0; i<results.length; i++) {
            // for(var i=0; i<results.length; i++) {
        //         $('#heroes-view').append("<p>Rating: "+response.data[i].rating + "</p>" );
        //         $('#heroes-view').prepend("<img src='"+results.fixed_height.url + " '>' " );

                // Only taking action if the photo has an appropriate rating
                if(results[i].rating !== "r" && results[i].rating !=="pg-13") {
                    // Creating a div with the class "item"
                    var gifDiv = $("<div class='item'>");
                    // Storing the rating data
                    var rating = results[i].rating;
                    console.log(rating);
                    // Creating a paragraph tag with the result item's rating
                    var displayRating = $('<p>').text("Rating: " + rating);
                    console.log(displayRating);
                    // Creating an image tag
                    var heroImage = $("<img>");
                    // Giving the image tag an src attribute of a property pulled off the result item
                    heroImage.attr("src", results[i].images.fixed_height.url);
                    // Appending the paragraph and heroImage created to the "heroDiv" div created
                    heroDiv.append(p);
                    // Display the image
                    heroDiv.append(heroImage);
                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#heroes-view").prepend(heroDiv);
                }
        };
    });    
});


// Creating a div to hold the gifs
// var heroDiv = $("<div class='hero'>");

// Storing the rating data
// var rating = results[i].rating;

// Creating a paragraph tag with the result item's rating
// var displayRating = $('<p>').text("Rating: " + rating);

// Creating an image tag
// var heroImage = $("<img>");

// Giving the image tag an src attribute of a property pulled off the result item
// heroImage.attr("src", results[i].images.fixed_height.url);

// Appending the paragraph and personImage created to the "gifDiv" div created
// heroDiv.append(p);

// Display the image
// heroDiv.append(heroImage);

// This function handles events when the submit button is clicked
$('#add-hero').on('click', function(event) {
    // function addHero(event) {
    // $('#add-hero').on('click', function(event){
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

    
// displayRatingInfo function re-renders the HTML to display the appropriate content
function displayRatingInfo() {

    var h = $(this).attr('data-name');
    // console.log(this);
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + h + "&" + "api_key=S0s43WOAT4jzNdL4GICYdNrVfDl0MWMH&limit=10";
    // console.log(queryURL);
    // Creating an AJAX call for the specific hero button being clicked
    $.ajax({
        url:queryURL, 
        method: 'GET'
    }).then(function(response) {
        var results = response.data;
        console.log(results);

        $('#heroes-view').empty();

            for(var i=0; i<results.length; i++) {
            $('#heroes-view').append("<p>Rating: "+response.data[i].rating+"</p>");
            $('#heroes-view').prepend("<img src='"+response.data[i].images.fixed_height.url+"'>");

        // for (var i = 0; i < results.length; i++) {
            // if (results[i].rating === "g" && results[i].rating === "pg-13") {

        // Retrieving the URL for the image
        // var imgURL = response.data[i].images.downsized.url;
        // console.log(imgURL);              

        // Creating an element to hold the image
        // var image = $("<img>").attr("src", imgURL);
        // console.log(image);

        // Creating a div to hold the gifs
        var heroDiv = $("<div class='hero'>");

        // Storing the rating data
        var rating = results[i].rating;
        
        // Creating a paragraph tag with the result item's rating
        var displayRating = $('<p>').text("Rating: " + rating);

        // Creating an image tag
        var heroImage = $("<img>");

        // Giving the image tag an src attribute of a property pulled off the result item
        heroImage.attr("src", results[i].images.fixed_height.url);
        
        // Appending the paragraph and personImage created to the "heroDiv" div created
        heroDiv.append(p);
        // Display the image
        heroDiv.append(heroImage);

        // Putting the entire GIF above the previous GIFs
        // $("#heroes-view").prepend(heroDiv);
            }
        });
    };


// events
// $(document).on('click', '#add-hero', addHero);
$(document).on('click', '.hero-btn', displayRatingInfo);
// $(document).on('click', '', function() {} );
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





