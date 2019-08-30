# nodejs-express-react

## Nodejs

* Simple to get started with, install Node and NPM

* Create a .js file and insert some JavaScript

* Run your file with: node <filename.js>

* If you are running something like a server and want to exit from the command line type: ctrl + c

### So what is Node.js

*“Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.”* - nodejs.org

Node.js is sometimes described as being single threaded. The reality is however a bit more complex. There are modules and functions in Node that will run on a worker thread when being called. Node also has a module called Cluster which can be used to create new processes.
With that being said there is a concept central to how Node works and to your understanding in writing code behaving as you expect it to, this concept is the so called: event loop

Put in simple terms the event loop is the part of Node responsible for its perceived concurrency.
Even though the event loop runs on what is referred to as the the main thread, the behavior will in many cases be perceived as being concurrent. This is best described through an example:

Imagine that we have created a web server in Node.js  running somewhere. The server has a couple of different routes where one of the routes contain code that fires a get request to retrieve some resources from some third-party API somewhere. Lets imagine that it takes 20-30 seconds for the remote API to respond. 
If we have two visitors on our site and one of them navigates to a page triggering the route with the API-call, the second visitor should still be able to browse the site and not have to wait 20-30 seconds for an unresponsive system. 
The system will still keep on responding to other events while waiting for the response of the get request, and its this behavior we often describe as concurrent.  

As demonstrated through our examples we can however block the event loop by doing something bad, like console logging something a million times. 

**The important part to understand here is that we want to avoid CPU heavy tasks when working with Node.js**


* Link to Node.js documentation https://nodejs.org/en/docs/

* Great ecosystem: https://www.npmjs.com/

#### Initialize a project: npm init 

The command above creates a package.json file in the directory you are running the command.
You can find packages you might like at npmjs.com, to install a package run: 
npm install <package-name> --save
This saves the package to your node_modules directory and adds the dependency to your package.json file.

#### Express
* One of the most popular web app frameworks available.
* Open source, good reputation, easy to get started with, big community

Express uses the concept of routing to determine when to execute some piece of functionality. 

We create a route for every HTTP request method we want to support for a given path (endpoint)
If a route is matched we execute one or more handler functions.
The syntax is as follows: 

app.Method(PATH, HANDLER)

If we would want to respond to a get request on the root route from a client our path would look like this: 

```
app.get(‘/’, function(req, res) {
	res.send(‘some message’)
})
```

When creating our Express application we use a concept called Middleware in order to execute some functionality for an incoming request.
Middleware functions are registered in a specific order which determines the order they are executed for an incoming request. 
A Middleware function has access to the request and response Object as well as a function called next. Invoking the next function executes the succeeding middleware.
We can use these functions to modify the request or response object, end the request-response cycle or as mentioned above invoke the function next.

We can register our Middleware function in several ways, the following example demonstrate two common design approaches and how they differ. 

We start by creating the middleware function we want to use: 

```
const myCustomMiddleware = (req, res, next) => {
	execute some logic...
	next() //move on to the next middleware
}
```


We can apply/register it at a specific route in order to invoke it only if its a matching get request

```
app.get(‘/contact’, myCustomMiddleware, (req, res) => {
	res.send(‘hello’)
})
```

```
app.post(‘/contact’, (req, res) => {
	console.log(req.body)
	res.send(‘hello’)
})
```

If we instead want the middleware to execute for both of our routes we can register it through the following syntax: 

```
app.use(myCustomMiddleware)
```

```
app.get(‘/contact’, (req, res) => {
	res.send(‘hello’)
})
```
```
app.post(‘/contact’, (req, res) => {
	console.log(req.body)
	res.send(‘hello’)
})
```