import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Header from '../structural/Header';
import fakeAuth from '../auth/fakeAuth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false,
    };

    this.login = this.login.bind(this);
  }

  login() {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { location } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    const { title } = this.props;
    const { subTitle } = this.props;
    return (
      <div>
        <Header title={title} />
        <div className="section">
          <div className="container">
            {subTitle}
            <div>
              <p>
                {`You must log in to view the page at ${from.pathname}`}
              </p>
              <button type="button" className="btn btn-action btn-sm" onClick={this.login}>
                {'Log in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;