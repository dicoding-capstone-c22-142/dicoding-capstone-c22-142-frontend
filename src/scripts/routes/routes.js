import Home from '../views/pages/home';
import NotFoundPage from '../views/pages/404';
import Guide from '../views/pages/guide';
import About from '../views/pages/about';
import Registration from '../views/pages/registration';
import Dashboard from '../views/pages/dashboard';
import Manage from '../views/pages/manage';
import Transaction from '../views/pages/transaction';
import Report from '../views/pages/report';
import TransactionHistory from '../views/pages/transaction-history';
import Profile from '../views/pages/profile';

const routes = {
  '/': Home, // default page
  '/404': NotFoundPage,
  '/guide': Guide,
  '/about': About,
  '/registration': Registration,
  '/users/:id/dashboard': Dashboard,
  '/users/:id/manage': Manage,
  '/users/:id/transaction': Transaction,
  '/users/:id/report': Report,
  '/users/:id/transaction-history': TransactionHistory,
  '/users/:id/profile': Profile,
};

export default routes;
