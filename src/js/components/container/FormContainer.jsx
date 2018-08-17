import React, { Component } from 'react';
import Input from '../presentational/Input';

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      SeoTitle: 'ssss',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { SeoTitle } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="SeoTitles"
          type="text"
          id="SeoTitle"
          value={SeoTitle}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}
export default FormContainer;