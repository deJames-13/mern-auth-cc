import { ProfileEdit, ProfileView } from '../../pages';

const profileRoutes = [
  {
    path: '/profile',
    element: <ProfileView />,
  },
  {
    path: '/profile/edit',
    element: <ProfileEdit />,
  },
];

export default profileRoutes;
