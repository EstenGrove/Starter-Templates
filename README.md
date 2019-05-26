# Starter-Templates
A set of starter templates including: HTML &amp; Sass, React, Webpack w/ Sass and others.

## __Templates__
- 7-1 Sass (Sass-Basic)
- Webpack w/ Babel, Sass


## Getting Started
__Prerequisites__: git and node already installed.

- __Step 1: clone repo OR clone template__
  - To clone the repo:
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
- __Step 3: run the live server with a ```watch``` flag to check for changes upon save__
```bash
npm run compile:sass -w .
```
- __Step 4: open your index.html in a browser and you're good to go!__
