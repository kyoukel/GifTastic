

$('button').on('click', function(){
    // alert("Button Clicked!");
    var h = $(this).attr('data-search');
    console.log(h);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + h + "&" + "api_key=S0s43WOAT4jzNdL4GICYdNrVfDl0MWMH&limit=10";
    console.log(queryURL);

    $.ajax({
        url:queryURL, method: 'GET'})
        .done(function(response){
            console.log(response);
        })
})

