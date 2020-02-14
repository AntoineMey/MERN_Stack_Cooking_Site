import React, {  } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';

import AppNavbar from './Components/AppNavbar';
import Table from './Components/Table';
import NewRecipe from './Components/NewRecipe';
import SignUp from './Components/auth/SignUp';
import SignIn from './Components/auth/SignIn';
import Home from './Components/Home';
import NavAlpha from './Components/ingredients/navAlpha';
import RecipeUnit from './Components/recipe/recipeUnit';

import './App.css';


export default function App() {
  return (
    <Router>
      <AppNavbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/recette">
            <Container>
              <NewRecipe />
            </Container>
          </Route>
          <Route path="/table">
            <Container>
              <Table />
            </Container>
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/ingredients">
            <Container>
              <NavAlpha />
            </Container>
          </Route>
          <Route path="/recette/truc">
            <Container>
              <RecipeUnit />
            </Container>
          </Route>
          <Route path="/">
            <Container>
              <Home />
            </Container>
          </Route>
        </Switch>
    </Router>
  );
}
