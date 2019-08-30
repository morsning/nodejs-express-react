# About this example

* After cloning the repo run npm install as usual to install express.

* Run the app.js file

```
node app.js
```

**A concept called Middleware is used to specify functions that execute some logic in response to one or more routes being triggered by an incoming request.**
Middleware functions are executed in sequential order corresponding to the order we register them.
There are several ways of registering/applying Middleware for one or more routes.

In this example the Middleware function we named myCustomMiddleware2 is register for all routes through passing it to app.use()
The logic in this function will execute regardless of which of our routes triggered. In other words, visiting localhost:3000 or localhost:3000/route1 or route2 or route3 will all result in your terminal printing the text: “middleware for all” 
In contrast the other middleware we have created is registered specifically for route3.
So visiting localhost:3000/route3 will be the only case where our terminal will output both the text: middleware triggered and the text Middleware for all. 

We can write our own Middleware or use third-party Middleware to get our application to behave in a certain way. 
The third-party Middleware functions cors as well as body-parser are commonly seen In Express applications.

