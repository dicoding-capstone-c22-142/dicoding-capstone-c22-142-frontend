import Home from '../../views/pages/landing-page/home';
import NotFoundPage from '../../views/pages/404';
import Guide from '../../views/pages/landing-page/guide';
import About from '../../views/pages/landing-page/about';
import Registration from '../../views/pages/landing-page/registration';

const routes = {
  '/': Home, // default page
  '/404': NotFoundPage,
  '/guide': Guide,
  '/about': About,
  '/registration': Registration,
};

export default routes;
