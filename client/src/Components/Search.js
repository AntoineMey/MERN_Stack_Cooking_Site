// Components/Search.js

import React from 'react'
import {
Button,
Container,
Form,
Col,
Input,
InputGroupAddon,
InputGroup,
} from 'reactstrap';

class Search extends React.Component {

  render() {
    return (
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Rechercher</Button>
        </InputGroupAddon>
      </InputGroup>
    )
  }
}

export default Search
