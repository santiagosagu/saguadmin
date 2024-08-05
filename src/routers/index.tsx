import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../modulos/dashboard/index';
import ErrorPage from '../page/ErrorPage';
import Login from '../page/login/Login';
import Users from '../modulos/users';
import { CountriesModule } from '../modulos/countries';
import { MaterialsModule } from '../modulos/materials';

const useRouterApp = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: '/usuarios',
          element: <Users />,
        },
        {
          path: '/paises',
          element: <CountriesModule />,
        },
        {
          path: '/materiales',
          element: <MaterialsModule />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);

  return router;
};

export default useRouterApp;
