# Review Questions

## What is Node.js?
Node.js is a runetime environment for javascript on the server side. That is why the console in the google chrome browser, does not display console.log messages but since the terminal in VScode has node then it shows the messages. It is asynchrounous which means the single thread that we have can run the rest of the code, so the asynchronous request is in the queue until it gets information back from the server which then it can execute. Node.js is made with C++ and runs on the Google's V8 engine, which is used to convert our JS code into machine code. Node.js has another great ability by being a package library. A con with Node.js is that because it only uses one thread from the CPU, the other threads are not being used which wastes processing power. The other perspective is that the developer does not have to think about two tasks overwritting each others' updates, or think about synchronizing the code to run in the proper order.
## What is Express?
Express is a light-weight framework that means it is not a big framework to download and the file size is smaller compared to other frameworks. It is also unopinonated, there are many ways to finish the same task, and its up to the developer how to complete that task. It allows more flexibility for the use of other technologies in the project. It breaks down our application using routes so we don't have to make one huge request to the server and not let our small attention span audience wait for the page.
## Mention two parts of Express that you learned about this week.
Express is useful for dividing our application into routes, and it helps make requests to the server for the specific information that the server should respond back with.
## What is Middleware?
Middleware is used to modify the already sending request to the server. It can be used for keeping data clean so that the data does not need to be cleaned in the database in the future. Another use is for error handling, or parsing JSON. There are so many things that middleware can do so the best way to think about it, they are pipes that modify the data passing through it and sent to the next pipe until it reaches its destination which is the server.
## What is a Resource?
A resource is the information in the server that gets managed by the client. The API creates the endpoints to manage these resources and these resources can be about users, projects, dogs, cats, and any other information in the server.
## What can the API return to help clients know if a request was successful?
A status code of 200 which is OK, tells the client that the request was successful, and another one which is 201 tells the client that a post has been successfully completed.
## How can we partition our application into sub-applications?
We can partition our express files by using express.Router() which then lets use export to the master file. We can declare the central route in the master file then its subroutes can be made in the file that was imported to the master.
## What is express.json() and why do we need it?
express.json is needed for the parsing of the req.body. It works the same way as body-parser in this case. It is a middleware also.