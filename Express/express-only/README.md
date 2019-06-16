# Basic Express Templates
NOTE: this template does NOT make use of ```express-generator```

### Steps
__Pre-requisites: have node installed and a access to a terminal window__

1. create a default ```package.json``` file: ```npm init -y```
2. install Express and save to dependencies: ```npm i -S express```
3. create an ```app.js``` file in the project root
4. install "nodemon" package (to devDependencies) for quick reloading of the server: ```npm i -D nodemon```
  1. in the ```package.json``` file under the ```scripts``` section add the "run server" script: ```"dev": "nodemon app.js"```
5. now inside the ```app.js``` add the starter express code: 
```javascript
// import express
const express = require('express');

// init the express instance
const app = express();

// define the port number
const port = process.env.port || 9000

// start listening on that port for route changes and requests...
app.listen(port, () => console.log('Running app on port 9000...'));
```
6. now you can define some routes. create a folder in the project root called "routes"
  1. ```mkdir routes```
  2. inside the "routes" folder create a file called ```api.js```
  3. inside the ```api.js``` file, init an express router and define the following routes:
  ```javascript
  const express = require('express');
  const router = express.Router();
  
  // first router handles GET requests made @ '/'
  router.get('/', (req, res) => {
    res.send('This is the home page!');
  });
  
  // 2nd route handles GET requests made @ '/about'
  router.get('/about', () => {
    res.send('This is the about page!');
  });
  
  // export the router
  module.exports = router;
  ```
7. then inside the ```app.js``` file import the routes and register them in the app:
```javascript
// import routes file
const routes = require('./routes/api.js');

// register the routes in the app - this goes before "app.listen(...)"
app.use(routes);
```
8. now you can go to the terminal and start the app/server: ```npm run dev```
  1. then navigate to ```http://localhost:9000``` in the browser and you should get the response: "This is the home page!"
  2. then navigate to ```http://localhost:9000/about``` in the browser and you should get the response: "This is the about page!"
9. You're all set!
