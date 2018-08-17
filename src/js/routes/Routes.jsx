import Home from '../components/views/Home';
import Redux from '../components/views/Redux';
import List from '../components/views/redux/List';
import Form from '../components/views/redux/Form';
import Fetch from '../components/views/redux/Fetch';
import Protected from '../components/views/Protected';
import Login from '../components/views/Login';

const Routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Home',
    subTitle: 'sub title',
  },
  {
    path: '/redux',
    component: Redux,
    title: 'Redux',
    subTitle: 'sub title',
    routes: [
      {
        path: '/redux/list',
        component: List,
        title: 'List',
        subTitle: 'sub title',
      },
      {
        path: '/redux/form',
        component: Form,
        title: 'Form',
        subTitle: 'sub title',
      },
      {
        path: '/redux/fetch',
        component: Fetch,
        title: 'Fetch',
        subTitle: 'sub title',
      },
    ],
  },
  {
    path: '/protected',
    component: Protected,
    title: 'Protected',
    subTitle: 'sub title protected',
    isProtected: true,
  },
  {
    path: '/login',
    component: Login,
    title: 'Login',
    subTitle: 'sub title',
  },
];

export default Routes;