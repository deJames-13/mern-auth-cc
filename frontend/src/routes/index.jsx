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

console.log(router);

export default router;
