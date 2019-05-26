import React, {Component} from 'react';
import InputForm from "../components/InputForm";
import {inject} from "mobx-react";
import { Button } from 'reactstrap';

@inject('carouselStore')
class Add extends Component {

  goTo = () => {
    const {history} = this.props;
    history.push('/');
  };

  render() {
    const { match, history } = this.props;
    const editIdx = match.params.idx;

    return (
      <div style={{ paddingLeft: "20px"}}>
        <Button st color="secondary" onClick = {this.goTo}>Back</Button>
        <h1>{editIdx ? 'Edit' : 'Add'}:</h1>
        <InputForm history = { history } editIdx={editIdx}/>
      </div>
    )
  }
}

export default Add;
