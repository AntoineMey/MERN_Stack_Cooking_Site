import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { IngredientsA, IngredientsB, IngredientsC, IngredientsD, IngredientsE, IngredientsF } from './IngredientsList';


const NavAlpha = (props) => {
  return (
  <Router>
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink href="/ingredients/A">
          A
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/ingredients/B">
          B
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/ingredients/C">
          C
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/ingredients/D">
          D
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/ingredients/E">
          E
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/ingredients/F">
          F
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          G
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          H
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          I
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          J
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          K
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          L
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          M
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          N
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          O
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          P
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          Q
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          R
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          S
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          T
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          U
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          V
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          W
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          X
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          Y
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          Z
        </PaginationLink>
      </PaginationItem>
    </Pagination>
    <Switch>
      <Route path="/ingredients/A">
          <IngredientsA />
      </Route>
      <Route path="/ingredients/B">
          <IngredientsB />
      </Route>
      <Route path="/ingredients/C">
          <IngredientsC />
      </Route>
      <Route path="/ingredients/D">
          <IngredientsD />
      </Route>
      <Route path="/ingredients/E">
          <IngredientsE />
      </Route>
      <Route path="/ingredients/F">
          <IngredientsF />
      </Route>
    </Switch>
  </Router>
  );
}

export default NavAlpha;
