import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { RecipUnit } from './recipeUnit';


const RecipeCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="img/87658_w420h344c1cx1663cy2227.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button href='/recette/truc'>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;
