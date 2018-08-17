// src/js/components/Form.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import List from './List';
import { addArticle, importArticles, importArticlesAxios } from '../../../redux/actions/index';

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
  importArticles: () => dispatch(importArticles()),
  importArticlesAxios: () => dispatch(importArticlesAxios()),
});

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleLoadArticles = this.handleLoadArticles.bind(this);
    this.handleLoadArticlesAxios = this.handleLoadArticlesAxios.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSave(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({
      uid: id,
      id,
      title,
    });
    this.setState({ title: '' });
  }

  handleLoadArticles(event) {
    event.preventDefault();
    this.props.importArticles();
  }

  handleLoadArticlesAxios(event) {
    event.preventDefault();
    this.props.importArticlesAxios();
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="title">
              {'Title'}
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-success btn-lg" onClick={this.handleSave}>
              {'SAVE'}
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-success btn-lg" onClick={this.handleLoadArticles}>
              {'Load articles'}
            </button>
            <button type="button" className="btn btn-success btn-lg ml-2" onClick={this.handleLoadArticlesAxios}>
              {'Load articles Axios'}
            </button>
          </div>
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>
            {'Articles'}
          </h2>
          <List />
        </div>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;