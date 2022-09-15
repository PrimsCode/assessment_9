import React, {useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Food from "./FoodItem";
import Form from "./FoodForm";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  //functions to call food
  const getSnacks = async() => {
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    setIsLoading(false);
  }

  const getDrinks = async() => {
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setIsLoading(false);
  }

  const updateFood = async(foodType) => {
    if (foodType === 'drinks'){
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    } else {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
    }
  }

  //getting food during loading
  useEffect(() => {
    getSnacks();
    getDrinks();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu food={snacks} foodType="snacks" title="Snack" />
            </Route>
            <Route exact path="/drinks">
              <Menu food={drinks} foodType="drinks" title="Drink" />
            </Route>
            <Route path="/snacks/:id">
              <Food items={snacks} foodType="snacks" cantFind="/404" />
            </Route>
            <Route path="/drinks/:id">
              <Food items={drinks} foodType="drinks" cantFind="/404" />
            </Route>
            <Route path="/add-new-food">
              <Form updateFood={updateFood} cantFind="/404" />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
