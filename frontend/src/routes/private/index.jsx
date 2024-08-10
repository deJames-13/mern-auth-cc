import { PrivateLayout } from './../../layouts';
import { Home, Profile } from './../../pages';
import profileRoutes from './profile';
const privateRoutes = [
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile />, children: [...profileRoutes] },
    ],
  },
];

export default privateRoutes;
