import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const NewRecipe = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="NewRecipeName">Nom de la recette</Label>
        <Input type="text" name="RecipeName" id="NewRecipeName" />
      </FormGroup>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="category">Catégorie</Label>
            <Input type="select" name="nbrPeople" id="nbrPeople">
              <option>plat principal</option>
              <option>en-cas</option>
              <option>entrée</option>
              <option>dessert</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="Difficulty">Difficulté</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="nbrPeople">Nombre de personnes</Label>
            <Input type="number" name="nbrPeople" id="nbrPeople" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="preparationTime">Temps</Label>
            <Input type="text" name="preparationTime" id="preparationTime" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="text" id="descriptionText" />
      </FormGroup>
      <FormGroup>
        <Label for="recipePicture">Ajouter une photo</Label>
        <CustomInput type="file" id="recipePicture" name="recipePicture" />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Je suis sur de moi</Label>
      </FormGroup>
      <Button>Publier</Button>
    </Form>
  );
}

export default NewRecipe;
