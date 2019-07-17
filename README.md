# Starter-Templates
A set of starter templates including: HTML &amp; Sass, React, Webpack w/ Sass and others.

## __Templates__
- [7-1 Sass (Sass-Basic)](https://github.com/EstenGrove/Starter-Templates/tree/master/Sass-Basic)
- [React-CSS Modules](https://github.com/EstenGrove/Starter-Templates/tree/master/CSS-MODULES-REACT): React w/ CSS Modules
- [Webpack w/ Babel](https://github.com/EstenGrove/Starter-Templates/tree/master/Webpack/babel)
- [Webpack w/ Sass](https://github.com/EstenGrove/Starter-Templates/tree/master/Webpack/sass)
- [Express-Babel](https://github.com/EstenGrove/Starter-Templates/tree/master/Express/express-babel): Express and Babel setup
- [Express Only](https://github.com/EstenGrove/Starter-Templates/tree/master/Express/express-only): Standalone Express template
- [React-Sass](https://github.com/EstenGrove/Starter-Templates/tree/master/React-Sass/react-sass): React and Sass template


### Alternate 3rd-Party Templates * Starter Packs
- [react-slingshot](https://github.com/coryhouse/react-slingshot): React & others
	- Redux, Sass, Webpack, Babel, Jest and more
- [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate): Offline-centric React boilerplate, with auto-refresh
- [react-starter-kit](https://github.com/kriasoft/react-starter-kit): Node.js, Express GraphQL and React with Babel and Webpack
- [razzle](https://github.com/jaredpalmer/razzle): Server-Side rendered React template. Works with more than just React, such as Vue, Angular, Vanilla JS, Reason and Elm
- [rekit](https://github.com/supnate/rekit): React, Redux and React Router. Will force a specific folder structure, very opinionated.
- [react-pwa](https://github.com/Atyantik/react-pwa): React PWA template w/ server-side rendering. Only supports Safari and Chrome. Built in code-splitting, ES7 support, SSR and React Router.

## Getting Started
__Prerequisites__: git and node already installed.

- __Step 1: clone repo OR clone a single template__
  - __To clone the whole repo:__
```bash
git clone https://github.com/EstenGrove/Starter-Templates.git
```
  - To clone a single template:
```bash
# Cloning a specific folder from git
svn checkout https://github.com/EstenGrove/Starter-Templates/trunk/<some-template>

# Example: Cloning just the Sass Starter Template
svn checkout https://github.com/EstenGrove/Starter-Templates/trunk/Sass-Basic
```
- __Step 2: install dependencies__
  - Change to the directory you just installed the project in ```cd mydir/``` first. 
```bash
npm install
```
- __Step 3: run the live server__
	- NOTE: this command may vary based on the template(ie Sass-Basic template uses a different command, check the README.md)
```bash
npm start
```
