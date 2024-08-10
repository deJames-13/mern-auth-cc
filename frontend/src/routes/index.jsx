import { createBrowserRouter } from 'react-router-dom';
import { Errors } from '../components';
import defaultRoutes from './default';
import privateRoutes from './private';

const router = createBrowserRouter([
  ...defaultRoutes,
  ...privateRoutes,
  {
    path: '*',
    element: <Errors.NotFound />,
  },
]);

export default router;
