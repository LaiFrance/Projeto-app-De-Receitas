import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreFoodsNationalities from './pages/ExploreFoodsNationalities';
import Profile from './pages/Profile';
import ExploreDrinksProvider from './context/Providers/ExploreDrinksProvider';
import ExploreFoodProvider from './context/Providers/ExploreFoodProvider';
import FoodProvider from './context/Providers/FoodProvider';
import DrinksProvider from './context/Providers/DrinksProvider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <FoodProvider>
          <DrinksProvider>
            <ExploreFoodProvider>
              <ExploreDrinksProvider>
                <Route path="/" exact component={ Login } />
                <Route path="/foods" exact component={ Foods } />
                <Route path="/foods/:id" exact component={ Foods } />
                <Route path="/drinks" exact component={ Drinks } />
                <Route path="/explore" exact component={ Explore } />
                <Route path="/explore/foods" exact component={ ExploreFoods } />
                <Route path="/explore/drinks" exact component={ ExploreDrinks } />
                <Route
                  path="/explore/foods/ingredients"
                  exact
                  component={ ExploreFoodsIngredients }
                />
                <Route
                  path="/explore/drinks/ingredients"
                  exact
                  component={ ExploreDrinksIngredients }
                />
                <Route
                  path="/explore/foods/nationalities"
                  exact
                  component={ ExploreFoodsNationalities }
                />
                <Route path="/profile" exact component={ Profile } />
              </ExploreDrinksProvider>
            </ExploreFoodProvider>
          </DrinksProvider>
        </FoodProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
