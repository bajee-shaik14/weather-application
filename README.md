# Weather-Application

This App is the simple Weather App that displays a current weather conditions of the selected and allows users to add new cities to the favourite list displayed in the home page/UI.

SET UP INSTRUCTIONS:
* Start up the app using "npm start".


FUNCTIONALITY:

*** When the app is opened initially:

* Home page is displayed with search bar to search for the cities to get the current weather conditions in the given city.
* Current weather conditions of the perticular city are fetched using OpenWeatherMap REST API
* "Search" button is available beside the search bar to search after entering the valid city name 
* "Fav" button is available beside the "search" button so that the user can add the city entered to his favourite list 
  which is displayed below the search bar in the UI.

         
*** When "Search" button is clicked:

* Data is fetched using the API call taking the search input city and the required response is rendered in the other
  screen in the weather info page.

*** When "fav" button is clicked without entering the city in the search bar, an alert is popup saying "Enter the city"
*** when wrong url is typed NotFound page is routed with back button available to route back to home page.
         
*** EndPoint/REST API used: 

* Url : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
* ApiKey: "54c42059c4b16f702367e1755e88529c"


