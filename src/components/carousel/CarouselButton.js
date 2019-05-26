import React, {Component} from 'react';
import { Button } from 'reactstrap';

class CarouselButton extends Component {

  render() {
    const { button } = this.props;
    const buttons = button.map((btn )=>
      <form style={{paddingTop: "10px"}}>
        <Button color="info" formAction={btn.url}>{ btn.title }</Button>
      </form>
    );
    return (
      <div>{buttons}</div>
    );
  }
}

export default CarouselButton;
