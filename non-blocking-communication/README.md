# About this example

* After cloning the repo run npm install as usual to install express.

* Run the server1.js file

```
node server1.js
```

* Run the server2.js file

```
node server1.js
```

* The server1.js is the exact same server as in the blocking-loop example it runs at port 3000, so visiting localhost:3000 or localhost:3000/route1 or localhost:3000/route2 will trigger that servers routes. Visiting localhost:3000/route2 will make the server unresponsive as we saw in that example. 

* The server2.js runs on port 3001 and has the same two first routes as server1, however visiting localhost:3001/route2 triggers a function which makes a request to the server1. And more specific to its route2, the same route2 that triggers the long loop making server1 unresponsive.
However the imporant part to note here is that our server2 is still responsive and we can visit other routes on server2 instantly with a response even though server1 is still looping.
