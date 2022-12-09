import Home from '../../views/pages/landing-page/home';
import NotFoundPage from '../../views/pages/404';
import Registration from '../../views/pages/landing-page/registration';

const routes = {
  '/': Home, // default page
  '/404': NotFoundPage,
  '/registration': Registration,
};

export default routes;
