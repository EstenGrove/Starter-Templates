import React from "react";
import Button from "./components/Button";
import styles from "./css/App.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>STARTER-TEMPLATE: React + CSS Modules</h1>
      <a href="https://github.com/EstenGrove/Starter-Templates/tree/master/CSS-MODULES-REACT"><img style={{position: 'absolute', top: 0, right: 0, border: 0}} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></img></a>
      <p style={{marginBottom: '1rem'}}>Example Button</p>
      <Button />
    </div>
  );
}

export default App;


