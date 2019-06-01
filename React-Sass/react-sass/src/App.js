import React from "react";
import Logo from "./components/Logo";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Logo />
      <h1 className="heading-main">STARTER_TEMPLATE: React-Sass</h1>
      <p className="heading-sub">
        A starter template using create-react-app and Sass
      </p>
    </div>
  );
}

export default App;
