import { DefaultLayout } from '../../layouts';
import { Home } from '../../pages';
import { LogIn, SignUp } from '../../pages/Auth';

const defaultRoutes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <LogIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
];

export default defaultRoutes;
