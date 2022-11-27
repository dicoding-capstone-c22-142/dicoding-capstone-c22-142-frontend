import Dashboard from '../../views/pages/cashier-page/dashboard';
import Manage from '../../views/pages/cashier-page/manage';
import Transaction from '../../views/pages/cashier-page/transaction';
import Report from '../../views/pages/cashier-page/report';
import TransactionHistory from '../../views/pages/cashier-page/transaction-history';
import Profile from '../../views/pages/cashier-page/profile';
import NotFoundPage from '../../views/pages/404';
import AddProducts from '../../views/pages/cashier-page/add-products';
import DetailProducts from '../../views/pages/cashier-page/detail-products';

const cashierRoutes = {
  '/': Dashboard,
  '/dashboard': Dashboard,
  '/manage': Manage,
  '/manage/add': AddProducts,
  '/manage/product': Manage,
  '/manage/product/:id': DetailProducts,
  '/transaction': Transaction,
  '/report': Report,
  '/transaction-history': TransactionHistory,
  '/profile': Profile,
  '/404': NotFoundPage,
};

export default cashierRoutes;
