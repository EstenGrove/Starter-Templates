# Express w/ Babel Template

### Steps
1. create default ```package.json```: ```npm init -y```
2. create an ```app.js``` file: ```touch app.js```
3. install nodemon for live-reloading of the server: ```npm i -D nodemon```
  1. then inside the ```package.json``` change the "scripts" section to: ```"start": "nodemon app.js"```
    1. now you can just use: ```npm start``` to start the live server and use ```rs``` to restart it, when needed.
