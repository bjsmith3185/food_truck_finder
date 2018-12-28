# Food Truck Sniffer
    - sniff out the best food trucks in your area - 

Deployed link:   foodtrucksniffer.herokuapp.com

Group Project 2

Core Idea: Create a Charlotte food truck application that allows people to know what is available in your area

The purpose of this application was to provide users with a way to locate food trucks in Charlotte. It also provides food truck businesses a way to advertise their locations thru tweeting an address. This eliminates the need for GPS tracking devices or requiring the business to log into a program and enter a location. 

The user needs only to open the app and explore the food trucks shown on the map. The user can click on a marker to discover additional information on the food truck selected. This information is provided by Twitter and Yelp.

The food truck needs to request being added to the applicaiton database. Once they are added by the owner of the app, they can display their current location by tweeting @foodTruckSniffer 'address'. 


This application uses the Twitter API to listen for current tweets from food trucks in the database. The information page also uses Twitter API to show the latest tweets by that business. The information page uses the Yelp API to display basic business information as well as reviews. GoogleMaps API was used to display current location for each food truck in the database.

The npm packages used are:
- body-parser
- dotenv
- express
- express-handlebars
- fetch
- sequelize
- mysql2
- twitter-webhooks

Production and testing used:
- chai
- eslint
- prettier


The following API keys are stored in .env
- Twitter
- Google
- Yelp





