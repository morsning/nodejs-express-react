# About this example

* Start by running npm install in both the express API folder as well as the React front end folder.

* Fire upp our Express server with the command: node app.js as usual and serve up our React application through navigating into the react-front-end folder and run: npm run start

This example is very similar to the react-get-from-api example. One of the get requests has been removed and a post request has been added in the componentDidMount lifecycle method of the react part of this project. 
In the express server part of the project we have added a new route for handling an incoming post request. We use the module body-parser to parse the incoming post request payload into JSON which we subsequently have access to through the incoming request objects body property.
