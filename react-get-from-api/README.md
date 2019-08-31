# About this example

* Start by running npm install in both the express API folder as well as the React front end folder.

* Fire upp our Express server with the command: node app.js as usual and serve up our React application through navigating into the react-front-end folder and run: npm run start

In this example our express server is functioning as a REST API which our React application can use in order to fetch resources, subsequently rendering the result in our browser.

In order to make this setup work in the majority of the more popular browsers used today we need to enable something called: cross-origin resource sharing aka CORS. In this setup our React application isn’t loaded from the express server we are running, it is served from a different server part of the create-react-app package. In other words the origin from where the React application was loaded differs from where we want to request resources.
Through installing the cors module and applying it as middleware our example will work as we are intending.

