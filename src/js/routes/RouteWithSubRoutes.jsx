import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Protected from '../components/views/Protected';
import fakeAuth from '../components/auth/fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => fakeAuth.isAuthenticated ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    )
    }
  />
);

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => route.isProtected ? (
      <PrivateRoute
        {...route}
      />
    ) : (
      // pass the sub-routes down to keep nesting
      <route.component
        {...props}
        {...route}
      />
    )
    }
  />
);

export default RouteWithSubRoutes;