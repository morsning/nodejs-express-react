# About this example

* After cloning the repo run npm install as usual to install express.

* Run the app.js file: 

```
node app.js
```
* The port of this app is set to 3000 so visit localhost:3000 in a browser of your choice

* Jumping between the root route (localhost:3000) and the first route in the app (localhost:3000/route1) should cause no delay in displaying the response in your browser. 

* However if you visit localhost:3000/route2 and quickly visiting one of the first two routes after, you should se your browser waiting without a response,
this is due to the loop running everytime we visit route2

