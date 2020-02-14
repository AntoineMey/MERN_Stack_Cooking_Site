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

class SignUp extends Component {
  render() {
    return (
      <Container align="center" width="500px">
        <h2>Inscription</h2>
        <Form>
          <Row xs="2">
            <Col>
              <FormGroup>
                <Input
                  name="firstname"
                  id="firstname"
                  placeholder="Prénom"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  name="lastname"
                  id="lastname"
                  placeholder="Nom"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row xs="2">
            <Col>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="adresse e-mail"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="mot de passe"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Je souhaite recevoir de l'inspiration, promotion commerciale et mise à jour via email.</Label>
          </FormGroup>
          <Col>
            <Button align="center">Soumettre</Button>
          </Col>
        </Form>
        <Col>
          <NavLink href="/SignIn">
            Déjà un compte ? Connectez-vous
          </NavLink>
        </Col>
        <Col>
          <Copyright />
        </Col>
      </Container>
    );
  }
}

export default SignUp;
