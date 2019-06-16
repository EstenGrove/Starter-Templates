# Express w/ Babel Template

### Steps
1. create default ```package.json```: ```npm init -y```
2. create an ```app.js``` file: ```touch app.js```
3. install express and node_modules: ```npm install express --save``` 
4. install nodemon for live-reloading of the server: ```npm i -D nodemon```
  1. then inside the ```package.json``` change the "scripts" section to: ```"start": "nodemon app.js"```
    1. now you can just use: ```npm start``` to start the live server and use ```rs``` to restart it, when needed.
5. __OPTIONAL__ adding Babel:
  1. run ```npm i -D @babel/core @babel/node``` to install babel core and babel-node and save them to devDependencies.
  2. then in the ```package.json``` file change the "scripts" section to: ```"start": "nodemon --exec babel-node app.js```
  3. then install the most usefull/common babel package: ```npm i -D @babel/preset-env```
    1. then in the project's root create a ```.babelrc``` file which is the babel config file.
      1. ```touch .babelrc```
      2. inside the ```.babelrc``` include the recently installed babel package as a dependency: 
      ```
        {
      "presets": [
       "@babel/preset-env"
        ]
      }
      ```
      3. this will give you the most recently available features which will then be transpiled down to ES2015 to be compatible with all browsers.
