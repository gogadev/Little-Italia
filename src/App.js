import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Customize from "./components/customize/Customize";
import Checkout from "./components/checkout/Checkout";

import "./App.css";

const App = () => {
  const [ingredients, setIngredients] = useState({
    mushrooms: false,
    olives: false,
    anchovies: false,
    sauce: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("ingredients");
    if (data) {
      setIngredients(JSON.parse(data));
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize
              ingredients={ingredients}
              setIngredients={setIngredients}
            />
          </Route>
          <Route path="/checkout">
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
