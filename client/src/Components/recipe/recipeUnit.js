import React, { Component } from 'react';
import { Media } from 'reactstrap';


class RecipeUnit extends Component {
  render() {
    return (
      <Media>
        <Media left top href="#">
          <Media object data-src="img/87658_w420h344c1cx1663cy2227.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    )
  }
}

export default RecipeUnit
