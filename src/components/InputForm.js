import React, {Component} from 'react';
import {action, observable} from "mobx";
import {observer, inject} from "mobx-react";
import { Button, Input } from 'reactstrap';

@inject('carouselStore')
@observer
class InputForm extends Component {
  @observable editable = false;
  @observable title = '';
  @observable subtitle = '';
  @observable imageUrl = '';
  @observable fullPrice = '';
  @observable monthlyPrice = '';

  @action
  componentDidMount= () => {
    const {carouselStore, editIdx} = this.props;

    if(editIdx){
      const editItem = carouselStore.carousel[editIdx];
      this.editable = true;
      this.title = editItem.title;
      this.subtitle = editItem.subtitle;
      this.imageUrl = editItem.image_url;
      this.fullPrice = editItem.full_price;
      this.monthlyPrice = editItem.monthly_price;
    }
  };

  @action
  delete = () => {
    const {carouselStore, editIdx, history} = this.props;
    carouselStore.deleteCarouselItem(editIdx);
    history.push('/');
  };

  @action
  onSubmit = () => {
    const { carouselStore, editIdx, history } = this.props;
    carouselStore.saveCarouselItem(editIdx,{
      title: this.title,
      subtitle: this.subtitle,
      image_url: this.imageUrl,
      full_price: this.fullPrice,
      monthly_price: this.monthlyPrice,
    });
    history.push('/');
  };

  render() {
    return (
      <div>
        <p>
          <label> Title:
            <br/>
            <Input
              type="text"
              name="title"
              value={ this.title}
              onChange={(e) => { this.title = e.target.value}}
            />
          </label>
        </p>
        <p>
          <label> Subtitle:
            <br/>
            <Input
              name="message"
              value={this.subtitle}
              onChange={(e) => { this.subtitle = e.target.value}}/>
          </label>
        </p>
        <p>
          <label> Full Price:
            <br/>
            <Input
              type="text"
              name="fullPrice"
              value={this.fullPrice}
              onChange={(e) => { this.fullPrice = e.target.value}}/>
          </label>
        </p>
        <p>
          <label> Monthly Price:
            <br/>
            <Input
              type="text"
              name="monthlyPrice"
              value={this.monthlyPrice}
              onChange={(e) => { this.monthlyPrice = e.target.value}}/>
          </label>
        </p>
        <p>
          <label> Image Url:
            <br/>
            <Input
              type="text"
              name="imageUrl"
              value={this.imageUrl}
              onChange={(e) => { this.imageUrl = e.target.value}}/>
          </label>
        </p>
        {this.editable ? <Button style={{ marginRight: "10px"}} color="danger" onClick={this.delete}>Delete</Button> : null}
        <Button
          color="success"
          onClick={this.onSubmit}
          disabled={this.validationMessage}
        >
          Save
        </Button>
      </div>
    );
  }
}

export default InputForm;
