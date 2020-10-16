import { Home, About, Experience, Login, ProfileId } from '../pages';
import Skills from '../pages/skills';

const routes = [
  {
    path: '/profile/:profileId',
    component: ProfileId,
    isPublic: false,
  },
  {
    path: '/about',
    component: About,
    isPublic: true,
  },
  {
    path: '/experience',
    component: Experience,
    isPublic: true,
  },
  {
    path: '/skills',
    component: Skills,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },

  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
