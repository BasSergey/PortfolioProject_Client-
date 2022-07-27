import Admin from "./pages/Admin";
import { ADMIN_ROUTE, BASKET_ROUTE, COURSE_ROUTE, LOADING_ROUTE, MAIN_PAGE, SHOP_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import CoursePage from "./pages/CoursePage";
import Loading from "./pages/Loading";
import LoginForm from "./components/LoginForm";
import MainPage from "./pages/MainPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: COURSE_ROUTE + '/:id',
    Component: CoursePage
  },
  {
    path: MAIN_PAGE,
    Component: MainPage
  },
  {
    path: LOADING_ROUTE,
    Component: Loading
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginForm
  },
  {
    path: MAIN_PAGE,
    Component: MainPage
  }
]