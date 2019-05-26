import React, {Component} from 'react';
import Carousel from '../components/carousel/Carousel'
import {Button, Col, Row} from 'reactstrap';

class Home extends Component {
  goTo = () => {
    const {history} = this.props;
    history.push('/add');
  };

  render() {
    return (
      <div style={{paddingLeft: "20px"}}>
        <Row>
          <Col sm="12" md={{size: 6, offset: 3}}>
            <Button color="primary" onClick={this.goTo}>Add</Button>
          </Col>
        </Row>
        <Carousel history={this.props.history}/>
      </div>
    )
  }
}

export default Home;
