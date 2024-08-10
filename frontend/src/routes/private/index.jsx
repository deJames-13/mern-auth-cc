import { PrivateLayout } from './../../layouts';
import { Home, Profile } from './../../pages';
const privateRoutes = [
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
];

export default privateRoutes;
