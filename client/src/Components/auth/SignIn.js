import React, {Component} from 'react';
import {
Button,
Container,
Row,
Col,
NavLink,
Jumbotron,
Input,
FormGroup,
Label,
Form,
} from 'reactstrap';

function Copyright() {
  return (
    <Container align="center">
      {'Copyright © CookWithMe '}
      {new Date().getFullYear()}
      {'.'}
    </Container>
  );
}

class SignIn extends Component {
  render() {
    return (
      <Container align="center" width="500px">
        <h2>Connexion</h2>
        <Form>
          <Col>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Adresse e-mail"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Mot de passe"
              />
            </FormGroup>
          </Col>
          <Col>
            <Button align="center">Soumettre</Button>
          </Col>
        </Form>
        <Col>
          <NavLink href="SignUp">
            Pas de compte ? Enregistrez-vous
          </NavLink>
        </Col>
        <Col>
          <Copyright />
        </Col>
      </Container>
    );
  }
}

export default SignIn;
