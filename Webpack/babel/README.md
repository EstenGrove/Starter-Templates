# Setup a Webpack & Babel Project


## Steps
1. Create a default ```package.json``` file: ```npm init -y```
2. Create a "src" directory that will be the entry point for webpack: ```mkdir src```
  1. Change in the "src" directory and create an ```index.js```: ```touch index.js```
3. Then inside the ```package.json``` change the "scripts" section to include: ```"start": "node src/index.js"```
4. Install the Webpack-CLI: ```npm i -D webpack webpack-dev-server webpack-cli```
NOTE: at this point the project structure should appear like so: 
```
-/dist
-/node_modules
-/src
  |
  index.js
-package.json
-package-lock.json
```

