import React, {Component} from 'react';
import CarouselButton from './CarouselButton'
import {Badge} from 'reactstrap';

class CarouselItem extends Component {

  render() {
    const {item} = this.props;
    const {title, subtitle, monthly_price, image_url, full_price, button} = item;
    return (
      <div className="item">
        {image_url ? <img alt={title} src={image_url}/> : null}
        {title ? <h1>{title}</h1> : null}
        {full_price ? <div>{full_price}</div> : null}
        {monthly_price ? <Badge color="danger">{monthly_price}</Badge> : null}
        {subtitle ? <div>{subtitle}</div> : null}
        {button ? <CarouselButton button={button}/> : null}
      </div>
    );
  }
}

export default CarouselItem;
