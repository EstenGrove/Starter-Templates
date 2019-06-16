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
