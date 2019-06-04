# CSS Modules Template for React (create-react-app)
A basic React starter template w/ CSS Modules. This version uses ```create-react-app v2``` so there's no need to eject.


## __Getting Started__
- First clone, or download this folder (```CSS-MODULES-REACT```) to your local machine.
- Then ```cd``` into your project directory ```cd my-project/```
- Then run ```npm install``` to install the dependencies
- Finally, run ```npm start``` to load up the test server. And you're all set!

### __Usage__
- When working w/ CSS Modules, you need to rename every ```css``` file from: ```Button.css ``` to: ```Button.module.css````.
  - Although, this IS NOT completely necessary, but it provides other devs clarity that it's a CSS module.

###### Usage Example
- After changing the name of your CSS file as shown above, now you need to *use* the styles.
- Say you have a ```css``` file named ```Button.module.css``` that looks like so:
```css
.button {
  padding: 1rem 2rem;
  background: #5c75ea;
  color: #fff
  border-radius: .5rem;
  border: none;
}
```
- In order to use it in one of your components you first need to import it: ```import styles from './css/Button.module.css'```
- Then to pass the ```.button``` class to a React component:
```javascript
// "styles" is the css "object" that you imported, and .button is a property of that object
<button className={styles.button}>Click Me</button>
```
- And now you've set up a CSS Module!


## __More Usage Examples__
- Single Class Name
```javascript
<button className={styles.button}>Click</button>
```
##### Multiple Class Names
```javascript
<button className={`${styles.button} ${styles.disabled}`}>Click</button>
```
##### Conditional Styles
```javascript
<button className={disabled ? styles.disabled : styles.button}>Click</button>
```
##### Conditional Styling w/ Multiple Classes
```javascript
<button className={disabled ? `${styles.button} ${styles.disabled}` : styles.button}>Click</button>
```
##### Nested Classes(using specificity)
```css
.container .button {
  padding: 1rem 2rem;
  background: #5c75ea;
  color: #fff;
}
```
Now the react component:
```javascript
// this is the equivalent of .container .button in the css stylesheet from above
<div className={styles.container}>
  <button className={styles.button}>Click</button>
</div>
```
##### CSS Using Composition
- ```Composition``` is the method of using styles from different stylesheets and "inheriting" css styles in one stylesheet from *another* stylesheet. 
###### Example of Composition
```css
// Button.module.css
.button {
  padding: 1rem 2rem;
  border-radius: .5rem;
  border: none;
  font-family: 'Raleway', sans-serif;
}
// Login.module.css
.login {
  composes: button from './Button.module.css'
  background: green;
  color: #fff;
}

```


#### Example Page
![CSS-Moduels](https://user-images.githubusercontent.com/41505038/58894269-84125d80-86a6-11e9-9d0e-a6ab2d88188e.png)
