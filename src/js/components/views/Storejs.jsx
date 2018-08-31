import React, { Component } from 'react';
import store from 'store';
import Header from '../structural/Header';

class Storejs extends Component {
  constructor() {
    super();
    this.state = {
      // title: '',
    };

    this.addtoStore = this.addtoStore.bind(this);
    this.removeFromStore = this.removeFromStore.bind(this);
  }

  addtoStore() {
    // Store current user
    store.set('user', { name: 'Marcus' });
    // Get current user
    const user = store.get('user');
    console.log(user);
  }

  removeFromStore() {
    store.remove('user');
  }

  render() {
    const { title } = this.props;
    const { subTitle } = this.props;
    return (
      <div>
        <Header title={title} />
        <div className="section">
          <div className="container">
            <a href="https://www.npmjs.com/package/store#user-content-installation" target="_blank" rel="noopener noreferrer">npm store documentation</a>
            <input type="button" value="Add to store" onClick={this.addtoStore} className="d-block mt-3" />
            <input type="button" value="Remove from store" onClick={this.removeFromStore} className="d-block mt-3" />
          </div>
        </div>
      </div>
    );
  }
}
export default Storejs;