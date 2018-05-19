# GifTastic

## Overview:

> Use the GIPHY API to make a dynamic web page that populates with gifs of your choice. Finish by calling the `GIPHY API` and using JavaScript and jQuery to change the HTML of your site.

## Before You Begin:

Hit the GIPHY API. Fool around with the GIPHY API. Giphy API. Be sure to read about these GIPHY parameters (hint, hint):
* q
* limit
* rating

Like many `APIs`, `GIPHY` requires developers to use a `key` to **access their API data**. 
* To use the GIPHY API, you'll **need a GIPHY account** (don't worry, it's free!) and then `obtain an API Key by creating an app`.
    
> Make sure you **switch the protocol in the query URL from http to https**, or the app may not work properly when deployed to `Github Pages`.

## Site Functionality

> Click on a superhero button or create your own button to display the 10 gifs on the screen. To animate the gif, click on any of the still gifs. Click again to change gif back to still.

   - [x] Create an array of strings, each one related to a topic that interests you
   - [x] App will take the topics in this array and create buttons in your HTML
   - [x] Try using a loop that appends a button for each string in the array
   - [x] When the user clicks on a button, the page should grab 10 static, non-animated gif images from the `GIPHY API` and place them on the page
   - [x] When the user clicks one of the `still GIPHY images`, the gif should `animate`. If the user `clicks the gif again`, it should `stop playing`
   - [x] Under every gif, display its rating (PG, G, so on). This data is provided by the GIPHY API.
   - [x] Add a form to your page that takes the value from a user input box and adds it into your topics array
   - [x] Then make a function call that takes each `topic` in the array and remakes the buttons on the page.
   - [x] Deploy your assignment to Github Pages.
