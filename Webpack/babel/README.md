# Setup a Webpack & Babel Project (*from scratch*)


## Steps
### Setup Webpack
1. Create a default ```package.json``` file: ```npm init -y```
2. Create a "src" directory that will be the entry point for webpack: ```mkdir src```
  1. Change in the "src" directory and create an ```index.js```: ```touch index.js```
3. Then inside the ```package.json``` change the "scripts" section to include: ```"start": "webpack-dev-server --mode development"```
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
5. Now to test it run: ```npm start```, then open up a new tab in the browser at: ```http://localhost:8080```
  1. However, the script that ```npm start``` runs is looking for a ```webpack.config.js```. So, we'll need to create it
6. Create a ```webpack.config.js``` by running: ```touch webpack.config.js``` in the project root.
  1. Inside the ```webpack.config.js``` paste the following code:
  ```javascript
  module.exports = {
  // 1
  entry: './src/index.js',
  // 2
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
    contentBase: './dist'
  }
};
```
    1. (1) Use the src/index.js file as entry point to bundle it. If the src/index.js file imports other JavaScript files, bundle them as well.
    2. (2) The bundled source code files shall result in a bundle.js file in the /dist folder.
    3. (3) The /dist folder will be used to serve our application to the browser.
7. Then inside the ```/dist``` folder create a ```bundle.js```, then change the script tag's src in the index.html file to use the bundle.js file.
  1. Then run ```npm start``` and this should automagically load the index.html page in the browser using the Webpack-Dev-Server.
### Setup Babel
1. Run: ```npm i -D @babel/core @babel/preset-env``` to install babel-core.
  1. If Webpack is already in place then you'll need to run: ```npm i -D babel-loader``` as well.
2. Then tell Webpack to respect Babel's changes by placing the following in the package.json:
```
"babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
  ```
3. Then inside the the webpack.config.js file you'll need to paste the following to include Babel in the build process:
```
module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
```
NOTE: The webpack.config.js should looks like so:
```
module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  }
};
```
### To Add Additional Babel Plugins
You'll want to extract the Babel setup/configuration into its' own file called: ```.babelrc```
1. This file will go in the project root.
2. Then move the babel config from the ```package.json``` into the ```.babelrc``` like so:
  1. Remove the following from the package.json and move it into the .babelrc
```
"babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
```
  2. A list of useful Babel plugins can be found [here](https://babeljs.io/docs/en/plugins)
  3. Then try doing an ```import``` by creating another file in the "src" directory and import it into the index.js
3. And you're all set!!!


----------------


# Setup Webpack and Babel Using this Repo's Template

## Steps
1. Clone this folder only
2. Run ```npm install```
3. Then run: ```npm start``` to start the Webpack Dev Server and get the app running!!
