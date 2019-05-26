import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {action, observable} from 'mobx';
import CarouselItem from './CarouselItem';
import {Button, Col, Row} from 'reactstrap';

@inject('carouselStore')
@observer
class Carousel extends Component {
  @observable currentIdx = 0;
  @observable length = this.props.carouselStore.carousel.length;

  @action
  goToLeft = () => {
    this.currentIdx--;
  };

  @action
  goToRight = () => {
    this.currentIdx++;
  };

  @action
  edit = () => {
    const {history} = this.props;
    history.push('/edit/' + this.currentIdx);
  };

  render() {
    const {carouselStore} = this.props;

    const carouselItem = carouselStore.carousel
      .filter((_, idx) => idx === this.currentIdx)
      .map(item => <CarouselItem key={this.currentIdx} item={item}/>);

    const showLeftArrow = this.currentIdx > 0 ? <button onClick={this.goToLeft}>Left</button> : null;
    const showRightArrow = this.currentIdx < this.length - 1 ? <button onClick={this.goToRight}>Right</button> : null;

    return (
      <div style={{paddingTop: "10px"}}>
        <Row>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <Button color="secondary" onClick={this.edit}>Edit</Button>
          </Col>
        </Row>
        <Row style={{paddingTop: "20px"}}>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <Row sm="12" md={{size: 6, offset: 3}} style={{paddingTop: "20px"}}>
              <Col>{showLeftArrow}</Col>
              <Col>{showRightArrow}</Col>
            </Row>
            {carouselItem}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousel;
