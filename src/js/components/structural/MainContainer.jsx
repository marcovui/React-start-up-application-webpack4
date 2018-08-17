import React, { Component } from 'react';
import Routes from '../../routes/routes';
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';

class MainContents extends Component {
  constructor() {
    super();
    this.state = {
      SeoTitle: 'ssss',
    };
  }

  render() {
    const { SeoTitle } = this.state;
    return (
      <div>
        {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    );
  }
}

export default MainContents;
