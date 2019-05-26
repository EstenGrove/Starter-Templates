# Starter-Templates

A set of starter templates including: HTML &amp; Sass, React, Webpack w/ Sass and others.


## Getting Started

**Prerequisites**: git and node already installed.

- **Step 1: clone repo OR clone a single template**
  - **To clone the whole repo:**

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

- **Step 2: install dependencies**
  - Change to the directory you just installed the project in `cd mydir/` first.

```bash
npm install
```

- **Step 3: run the live server with a `watch` flag to check for changes upon save**

```bash
npm run compile:sass -w .
```

- **Step 4: open your index.html in a browser and you're good to go!**

### Starter Page
- The page that loads after setup should look like so...
![STARTER-TEMPLATE__sass](https://user-images.githubusercontent.com/41505038/58385272-7cfe9780-7fa2-11e9-950e-99e6d5880c9f.png)
