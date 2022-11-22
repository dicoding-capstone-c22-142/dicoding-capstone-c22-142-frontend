import Dashboard from '../../views/pages/cashier-page/dashboard';
import Manage from '../../views/pages/cashier-page/manage';
import Transaction from '../../views/pages/cashier-page/transaction';
import Report from '../../views/pages/cashier-page/report';
import TransactionHistory from '../../views/pages/cashier-page/transaction-history';
import Profile from '../../views/pages/cashier-page/profile';
import NotFoundPage from '../../views/pages/404';

const cashierRoutes = {
  '/': Dashboard,
  '/users/:id/dashboard': Dashboard,
  '/users/:id/manage': Manage,
  '/users/:id/transaction': Transaction,
  '/users/:id/report': Report,
  '/users/:id/transaction-history': TransactionHistory,
  '/users/:id/profile': Profile,
  '/404': NotFoundPage,
};

export default cashierRoutes;
