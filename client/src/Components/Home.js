import React, { Component } from 'react';
import {
Button,
Container,
Row,
Col,
Jumbotron,
} from 'reactstrap';
import RecipeCard from './recipe/recipeCard';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Bienvenue !</h1>
          <p className="lead">Tout beau, tout neuf, ce site vous mettra l'eau à la bouche !</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="dark" size="lg" href="/ingredients">Afficher tous les ingrédients possibles</Button>
          </p>
        </Jumbotron>
        <Search />
        <Container>
          <Row xs="3">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
